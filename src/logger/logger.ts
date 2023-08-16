import type { Constructor, Instance } from '@/types';
import type { AbstractLogger } from './abstract-logger';

export type LoggerService = Constructor<{ createLogger(context: string): AbstractLogger }>;

let loggerService: Instance<LoggerService>;

export function setLoggerService(service: Instance<LoggerService>) {
	loggerService = service;
}

export const loggerMap = new WeakMap<Request | ScheduledEvent, AbstractLogger>();

export class Logger {
	constructor(readonly context: string) {}

	private _getOrCreateLogger() {
		return loggerService.createLogger(this.context);
	}

	verbose(message: string, ...args: any[]) {
		this._getOrCreateLogger().verbose(message, ...args);
	}

	log(message: string, ...args: any[]) {
		this._getOrCreateLogger().log(message, ...args);
	}

	warn(message: string, ...args: any[]) {
		this._getOrCreateLogger().warn(message, ...args);
	}

	error(message: string, ...args: any[]) {
		this._getOrCreateLogger().error(message, ...args);
	}
}
