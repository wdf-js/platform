#!/usr/bin/env zx
/// <reference types="zx/globals" />

const start = Date.now();

// --------------------------------------------------- HELPERS ---------------------------------------------------- \\

function capitalize(text) {
	return text.slice(0, 1).toUpperCase() + text.slice(1);
}

async function _(...processes) {
	const promises = new Set();
	const names = new Set();
	for (const [ name, callback ] of processes) {
		names.add(name);
		const promise = Promise.resolve(callback()).then(() => {
			promises.delete(promise);
			names.delete(name);
			return { name, isError: false };
		}, (error) => {
			return { name, error, isError: true };
		});
		promises.add(promise);
	}
	const start = Date.now();
	while (promises.size) {
		const namesArr = [...names];
		const lastName = namesArr.pop();
		let spinnerText = namesArr.join(', ');
		spinnerText += spinnerText ? ' and ' + lastName : lastName;
		spinnerText += '...';
		let res;
		await spinner(capitalize(spinnerText), async () => {
			res = await Promise.race([...promises]);
		});
		if (res.isError) {
			echo('❌ ' + capitalize(res.name));
			throw res.error;
		}
		echo(`✅ ${capitalize(res.name)} completed in ${Date.now() - start} ms`);
	}
}

function $$(...args) {
	const { verbose } = $;
	$.verbose = false;
	const processPromise = $(...args);
	$.verbose = verbose;
	return processPromise;
}

function cpToDist(filename) {
	return fs.copyFile(filename, 'dist/' + filename);
}

async function buildPackageJson() {
	const {
		name,
		license,
		description,
		repository,
		engines,
		dependencies,
		version,
	} = JSON.parse(await fs.readFile('package.json', 'utf8'));
	const [versionArg] = argv._;
	return JSON.stringify({
		name,
		version: versionArg?.slice(1) || version,
		main: 'index.cjs',
		module: 'index.js',
		license,
		description,
		repository,
		engines,
		dependencies,
	}, null, '\t');
}

// ----------------------------------------------------- MAIN ----------------------------------------------------- \\

await _(['cleaning dist folder', async () => {
	await fs.rm('dist', { recursive: true, force: true });
	await fs.mkdir('dist');
}]);
//await _(['building with SWC', () => $$`swc src -d dist`]);

await _(
	['building the project', () => $$`tspc`],
	['copying readme and license files', () => Promise.all([cpToDist('README.md'), cpToDist('LICENSE')])],
	['generating package.json', async () => fs.writeFile('dist/package.json', await buildPackageJson())],
);

echo('Build process completed in', Date.now() - start, 'ms');
