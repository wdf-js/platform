import { Constructor } from './constructor';

export type Instance<T> = T extends Constructor<infer R> ? R : never;
