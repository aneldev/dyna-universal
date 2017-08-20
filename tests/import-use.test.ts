declare const jasmine: any, describe:any, expect:any, it: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {
  env,
  isBrowser,
  isNode
} from '../src';

describe('Dyna Universal tools - import use', () => {
	it('should return a value isBrowser()', () => {
		expect(isBrowser()).not.toBe(undefined);
		expect(isBrowser()).not.toBe(null);
	});
	it('should return a value isNode()', () => {
		expect(isNode()).not.toBe(undefined);
		expect(isNode()).not.toBe(null);
	});
	it('should return correct value the isBrowser() && isNode()', () => {
		expect(isNode()).not.toBe(isBrowser());
	});
	it('should export the `env`', () => {
		expect(env).not.toBe(null);
		expect(env).not.toBe(undefined);
	});
});
