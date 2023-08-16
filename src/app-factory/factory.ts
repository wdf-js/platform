import { type LoggerService, setLoggerService } from '@/logger/logger';
import  type { Constructor } from '@/types';
import { readModuleDescriptor } from '@/decorators/module.decorator';
import { CoreModule } from '@/core';

const exportedField = Symbol('[[Exported]]');

class WDFApplication {
	constructor(appModule: any) {}

	start() {
		//
	}

	get<T>(entity: Constructor<T>): T {
		//
	}

	registerLogger<Service extends LoggerService>(Service: Service) {
		setLoggerService(this.get(Service));
	}
}

class WDFFactory {
	private async loadModule(Module: Constructor<any>, storage = new WeakMap<Constructor<any>, any>()) {
		const { imports = [], providers = [], controllers = [], exports = [] } = readModuleDescriptor(Module);
		const importedServices = new WeakMap<Constructor<any>, Constructor<any>>();
		imports.forEach((ImportedModule) => {
			(readModuleDescriptor(ImportedModule).exports || []).forEach((ImportedService) => {
				importedServices.set(ImportedService, ImportedModule);
			});
		});





		const instances = await Promise.all(imports.map((ImportedModule) => this.loadModule(ImportedModule, storage)));
		const imported: any[] = [];
		instances.forEach((instance) => {
			imported.push(...instance[exportedField]);
			delete instance[exportedField];
		});
		const loadedProviders = new WeakMap<Constructor<any>, any>();
		providers.forEach((Provider) => {
			loadedProviders.set(Provider, new Provider());
		});
	}

	async create(AppModule: Constructor<any>) {
		return new WDFApplication(await this.loadModule(AppModule));
	}
}

const factory = new WDFFactory();

export { factory as WDFFactory };
