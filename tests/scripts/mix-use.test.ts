import Global = NodeJS.Global;

declare const jasmine: any, describe:any, expect:any, it: any;
declare const universal: Global | Window, dynaUniversal: DynaUniversal;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {
  DynaUniversal,
  dynaUniversal as duEnv,
  isBrowser as duIsBrowser,
  isNode as duIsNode
} from '../../src';

describe('Dyna Universal tools - mix use', () => {
  it('should return a value isBrowser()', () => {
    expect(duIsBrowser).not.toBe(undefined);
    expect(duIsBrowser).not.toBe(null);
  });
  it('should return a value isNode()', () => {
    expect(duIsNode).not.toBe(undefined);
    expect(duIsNode).not.toBe(null);
  });
  it('should return correct value the isBrowser() && isNode()', () => {
    expect(duIsNode).not.toBe(duIsBrowser);
  });
  it('should export the `universal`', () => {
    expect(duEnv).not.toBe(null);
    expect(duEnv).not.toBe(undefined);
  });
  it('should have the global `universal`', () => {
    expect(universal).not.toBe(null);
    expect(universal).not.toBe(undefined);
  });
  it('should have the global `isNode`', () => {
    expect(dynaUniversal.isNode).not.toBe(null);
    expect(dynaUniversal.isNode).not.toBe(undefined);
    expect(dynaUniversal.isNode).toBe(duIsNode);
  });
  it('should have the global `isBrowser`', () => {
    expect(dynaUniversal.isBrowser).not.toBe(null);
    expect(dynaUniversal.isBrowser).not.toBe(undefined);
    expect(dynaUniversal.isBrowser).toBe(duIsBrowser);
  });
});
