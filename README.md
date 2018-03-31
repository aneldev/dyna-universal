# About

Small library for universal issues (browser-nodeJs war). 

# Usage

## Use it with import
```
import {universal, dynaUniversal, isBrowser, isNode} from 'dyna-universal';

universal;      // is the node.js's global or browser's window
dynaUniversal	// the DynaUniversal instance, is offers some tools 
isNode;     	// boolean if we are in node
isBrowser;  	// boolean is we are is browser

// console them
console.log('Are we are under node? Answer: ', dynaUniversal.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', dynaUniversal.isBrowser); // writes, true or false
console.log('Are we are under node? Answer: ', isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', isBrowser); // writes, true or false

```
## Use it with globals
```
import 'dyna-universal';

console.log('Are we are under node? Answer: ', dynaUniversal.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', dynaUniversal.isBrowser); // writes, true or false

```

# Exported properties

## isNode: boolean

Returns if it runs under node.js
 
## isBrowser: boolean

Returns if it runs under browser.

# Exported variables

## universal: Window | Global

Is the node.js's `global` or browser's `window`.

## dynaUniversal: DynaUniversal

Instance of DynaUniversal providing some universal environment tools  


# version

We follow semver.

# v0 beta

# v1 1st official

Has many breaking changes with v0.