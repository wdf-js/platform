import { AbstractLogger, type CoreService } from '@wdf/platform';

export class NTFYLogger extends AbstractLogger {
	constructor (
		private readonly topic: string,
		private readonly core: CoreService,
		context: string,
	) {
		super(context);
	}

	protected async writeLog(level: number, message: string) {
		await this.core.fetch(`https://ntfy.sh/${encodeURIComponent(this.topic)}`, {
			method: 'POST',
			body: JSON.stringify({ level, message }),
		});
	}
}
