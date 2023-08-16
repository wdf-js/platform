import { Constructor } from '@/types';

const moduleDescriptorProperty = Symbol('[[ModuleDescriptor]]');

interface ModuleDescriptor {
	imports?: Constructor<any>[],
	controllers?: Constructor<any>[],
	providers?: Constructor<any>[],
	exports?: Constructor<any>[],
}

export function Module(descriptor?: ModuleDescriptor): ClassDecorator {
	return (Class) => {
		Object.defineProperty(Class, moduleDescriptorProperty, descriptor || {});
	};
}

export function readModuleDescriptor(module: Constructor<any>) {
	if (moduleDescriptorProperty in module) {
		return module[moduleDescriptorProperty] as ModuleDescriptor;
	}
	throw new TypeError(`${module.name} does not look like a valid module. Forget to decorate it with @Module()?`);
}
