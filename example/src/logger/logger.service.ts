import { CoreService } from '@wdf/platform';
import { NTFYLogger } from './ntfy-logger.impl';

export class LoggerService {
	constructor(
		private readonly core: CoreService,
	) {}

	createLogger(context: string) {
		return new NTFYLogger(this.core.env('NTFY_TOPIC'), this.core, context);
	}
}
