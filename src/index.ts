export const isNode: () => boolean = () => !!(typeof process !== 'undefined' && process.versions && process.versions.node);
export const isBrowser: () => boolean = () => !isNode();
