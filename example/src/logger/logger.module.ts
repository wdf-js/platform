import { CoreModule, Module } from '@wdf/platform';
import { LoggerService } from './logger.service';

@Module({
	imports: [CoreModule],
	providers: [LoggerService],
	exports: [LoggerService],
})
export class LoggerModule {}
