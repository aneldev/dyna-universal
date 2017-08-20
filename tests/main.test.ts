declare let jasmine: any, describe:any, expect:any, it: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {isBrowser, isNode} from '../src';

describe('Dyna Universal tools', () => {
	it('should return a value isBrowser', () => {
		expect(isBrowser()).not.toBe(undefined);
		expect(isBrowser()).not.toBe(null);
	});
	it('should return a value isNode', () => {
		expect(isNode()).not.toBe(undefined);
		expect(isNode()).not.toBe(null);
	});
	it('should return correct value', () => {
		expect(isNode()).not.toBe(isBrowser());
	});
});
