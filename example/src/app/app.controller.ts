import { Body, Controller, Post } from '@wdf/platform';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly service: AppService) {}

	@Post('webhook')
	async webhook() {
		await this.service.processUpdate(data);
	}
}
