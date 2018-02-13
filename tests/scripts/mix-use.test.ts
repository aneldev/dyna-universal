declare const jasmine: any, describe:any, expect:any, it: any;
declare const env:any, isNode: boolean, isBrowser: boolean;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {
  env as duEnv,
  isBrowser as duIsBrowser,
  isNode as duIsNode
} from '../../src/index';

describe('Dyna Universal tools - mix use', () => {
	it('should return a value isBrowser()', () => {
		expect(duIsBrowser()).not.toBe(undefined);
		expect(duIsBrowser()).not.toBe(null);
	});
	it('should return a value isNode()', () => {
		expect(duIsNode()).not.toBe(undefined);
		expect(duIsNode()).not.toBe(null);
	});
	it('should return correct value the isBrowser() && isNode()', () => {
		expect(duIsNode()).not.toBe(duIsBrowser());
	});
	it('should export the `env`', () => {
		expect(duEnv).not.toBe(null);
		expect(duEnv).not.toBe(undefined);
	});
	it('should have the global `env`', () => {
		expect(env).not.toBe(null);
		expect(env).not.toBe(undefined);
	});
	it('should have the global `isNode`', () => {
		expect(isNode).not.toBe(null);
		expect(isNode).not.toBe(undefined);
		expect(isNode).toBe(duIsNode());
	});
	it('should have the global `isBrowser`', () => {
		expect(isBrowser).not.toBe(null);
		expect(isBrowser).not.toBe(undefined);
    expect(isBrowser).toBe(duIsBrowser());
  });
});
