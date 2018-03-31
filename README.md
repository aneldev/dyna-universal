# About

Small library for universal issues (browser-nodeJs war). 

# Usage

## Use it with import
```
import {envGlobal, isBrowser, isNode} from 'dyna-universal';

// we import the `envGlobal`
envGlobal;            // is the node.js's global or browser's window
envGlobal.isNode;     // boolean if we are in node
envGlobal.isBrowser;  // boolean is we are is browser

// console them
console.log('Are we are under node? Answer: ', envGlobal.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', envGlobal.isBrowser); // writes, true or false

// we can import the functions also from it
console.log('Are we are under node? Answer: ', isNode());       // writes, true or false
console.log('Are we are under browser? Answer: ', isBrowser()); // writes, true or false

```
## Use it with globals
```
import 'dyna-universal';

console.log('Are we are under node? Answer: ', envGlobal.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', envGlobal.isBrowser); // writes, true or false

```

# Exported methods

## isNode():boolean

Returns if it run under node.js
 
## isBrowser():boolean

Returns if it run under a browser.

# Exported variables

## envGlobal: any

Is the node.js's `global` or browser's `window`.

## envGlobal.isNode: boolean

Is the result of the `isNode`, no need to call again the `isNode()`;

In node.js you can eval `isNode` == `true`;

In browser you can eval `isNode` == `false`;

## envGlobal.isBrowser: boolean

Is the result of the `isBrowser`, no need to call again the `isBrowser()`;

In node.js you can eval `isBrowser` == `true`;

In browser you can eval `isBrowser` == `false`;

# Global definition

_Only one._

## envGlobal

The `envGlobal` variable (where is the node.js's `global` or browser's `window`) is assigned globally.

So globally you can use the `envGlobal` without import it.