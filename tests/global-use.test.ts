declare const jasmine: any, describe:any, expect:any, it: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

declare const env:any, isNode: boolean, isBrowser: boolean;

import '../src';

describe('Dyna Universal tools - global use', () => {
	it('should have a value isBrowser()', () => {
		expect(isBrowser).not.toBe(undefined);
		expect(isBrowser).not.toBe(null);
	});
	it('should have a value isNode()', () => {
		expect(isNode).not.toBe(undefined);
		expect(isNode).not.toBe(null);
	});
	it('should have correct value the isBrowser() && isNode()', () => {
		expect(isNode).not.toBe(isBrowser);
	});
	it('should have the global `env`', () => {
		expect(env).not.toBe(null);
		expect(env).not.toBe(undefined);
	});
});
