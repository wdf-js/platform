import { WDFFactory } from '@wdf/platform';
import { AppModule } from './app';
import { LoggerService } from './logger';

void async function bootstrap() {
	const app = await WDFFactory.create(AppModule);
	app.registerLogger(LoggerService); // required
	app.start();
}();
