import { Module } from '@wdf/platform';
import { LoggerModule } from '../logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [LoggerModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	//
}
