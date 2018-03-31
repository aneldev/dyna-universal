import Global = NodeJS.Global;
import Process = NodeJS.Process;

declare const global: Global, window: Window, process: Process;

export class DynaUniversal {
  private _isNode: boolean = !!(typeof process !== 'undefined' && process.versions && process.versions.node);
  private _global: Window | Global = (typeof window !== 'undefined') && window || global;

  public get isNode(): boolean {
    return this._isNode;
  }

  public get isBrowser(): boolean {
    return !this._isNode;
  }

  public get global(): Window | Global {
    return this._global;
  }
}

export const dynaUniversal: DynaUniversal = new DynaUniversal();
export const isNode: boolean = dynaUniversal.isNode;
export const isBrowser: boolean = dynaUniversal.isBrowser;
export const universal: Window | Global = dynaUniversal.global;

(universal as any).universal = universal;
(universal as any).dynaUniversal = dynaUniversal;
