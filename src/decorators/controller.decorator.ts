import { Constructor } from '@/types';

const controllerDescriptorProperty = Symbol('[[ControllerDescriptor]]');

interface ControllerDescriptor {}

export function Controller(descriptor?: ControllerDescriptor): ClassDecorator {
	return (Class) => {
		Object.defineProperty(Class, controllerDescriptorProperty, descriptor || {});
	};
}

export function readControllerDescriptor(module: Constructor<any>) {
	if (controllerDescriptorProperty in module) {
		return module[controllerDescriptorProperty] as ControllerDescriptor;
	}
	throw new TypeError(`${module.name} does not look like a valid controller. Forget to decorate it with @Controller()?`);
}
