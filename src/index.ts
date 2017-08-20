declare const global: any, window: any, process: any;

export const isNode: () => boolean = () => !!(typeof process !== 'undefined' && process.versions && process.versions.node);
export const isBrowser: () => boolean = () => !isNode();

let env: any = (typeof window !== 'undefined') && window || global;
env.env = env;
env.isNode = isNode();
env.isBrowser = !env.isNode;
export {env};
