/// <reference types="node" />
import Global = NodeJS.Global;
export declare class DynaUniversal {
    private _isNode;
    private _global;
    readonly isNode: boolean;
    readonly isBrowser: boolean;
    readonly global: Window | Global;
}
export declare const dynaUniversal: DynaUniversal;
export declare const isNode: boolean;
export declare const isBrowser: boolean;
export declare const universal: Window | Global;
