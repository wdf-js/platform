import { sprintf } from 'sprintf-js';

export abstract class AbstractLogger {
	constructor(protected readonly context: string) {}

	private _pendingLogs = new Set<Promise<void>>();

	private _log(level: number, message: string, args: any[]) {
		try {
			const formattedMessage = sprintf(message, ...args);
			const writePromise = this
				.writeLog(level, formattedMessage)
				.then(() => {
					this._pendingLogs.delete(writePromise);
				});
			this._pendingLogs.add(writePromise);
		} catch (e) {
			this._pendingLogs.add(Promise.reject(e));
		}
	}

	protected abstract writeLog(level: number, message: string): Promise<void>;

	verbose(message: string, ...args: any[]) {
		this._log(1, message, args);
	}

	log(message: string, ...args: any[]) {
		this._log(2, message, args);
	}

	warn(message: string, ...args: any[]) {
		this._log(3, message, args);
	}

	error(message: string, ...args: any[]) {
		this._log(4, message, args);
	}

	async flushLogs() {
		const results = await Promise.allSettled([...this._pendingLogs]);
		results.forEach((result) => {
			if (result.status === 'rejected') {
				console.error(result.reason);
			}
		});
	}
}
