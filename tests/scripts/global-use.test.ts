declare const jasmine: any, describe: any, expect: any, it: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

// import the dependency
import '../../src/index';

// import the type only but not the references, they should be on global object
import {DynaUniversal} from "../../src/index";

// declare the types only
declare const dynaUniversal: DynaUniversal;

describe('Dyna Universal tools - global use', () => {
  it('should have a value isBrowser()', () => {
    expect(dynaUniversal.isBrowser).not.toBe(undefined);
    expect(dynaUniversal.isBrowser).not.toBe(null);
  });
  it('should have a value isNode()', () => {
    expect(dynaUniversal.isNode).not.toBe(undefined);
    expect(dynaUniversal.isNode).not.toBe(null);
  });
  it('should have correct value the isBrowser() && isNode()', () => {
    expect(dynaUniversal.isNode).not.toBe(dynaUniversal.isBrowser);
  });
  it('should have the global `env`', () => {
    expect(dynaUniversal).not.toBe(null);
    expect(dynaUniversal).not.toBe(undefined);
  });
});
