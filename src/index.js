const isNode = !!(typeof process !== 'undefined' && process.versions && process.versions.node);

const _global = (typeof window !== 'undefined') && window || global;

_global.dynaUniversal = {
  isNode: isNode,
  isBrowser: !isNode,
  universal: _global,
};
