import { Service } from '@/decorators';

export const updateEnv = Symbol('[[UpdateEnv]]');

@Service()
export class CoreService {
	private readonly _env: Record<string, string> = {};
	private readonly _bindings: Record<string, any> = {};

	constructor(
		public readonly test: string,
		public readonly test2: number,
	) {}

	[updateEnv](env: Record<string, any>) {
		for (const [name, value] of Object.entries(env)) {
			if (typeof value === 'string') {
				this._env[name] = value;
			} else {
				this._bindings[name] = value;
			}
		}
	}

	env(name: string, required?: true): string
	env(name: string, required: false): string | undefined
	env(name: string, required = true) {
		if (!this._env[name] && required) {
			throw new ReferenceError(`Environment variable ${name} wasn't specified though it's required`);
		}
		return this._env[name];
	}

	fetch = fetch;
}
