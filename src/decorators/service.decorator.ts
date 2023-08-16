import { Constructor } from '@/types';

const serviceDescriptorProperty = Symbol('[[ServiceDescriptor]]');

interface ServiceDescriptor {}

export function Service(descriptor?: ServiceDescriptor): ClassDecorator {
	return (Class) => {
		Object.defineProperty(Class, serviceDescriptorProperty, descriptor || {});
	};
}

export function readControllerDescriptor(module: Constructor<any>) {
	if (serviceDescriptorProperty in module) {
		return module[serviceDescriptorProperty] as ServiceDescriptor;
	}
	throw new TypeError(`${module.name} does not look like a valid service. Forget to decorate it with @Service()?`);
}
