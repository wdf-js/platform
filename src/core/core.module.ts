import { Module } from '../decorators';
import { CoreService } from './core.service';

@Module({
	imports: [],
	providers: [CoreService],
	exports: [CoreService],
})
export class CoreModule {}
