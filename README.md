# About

Small library for universal issues (browser-nodeJs war). 

# Usage

## Use it with import
```
import {env, isBrowser, isNode} from 'dyna-universal';

// we import the `env`
env;            // is the node.js's global or browser's window
env.isNode;     // boolean if we are in node
env.isBrowser;  // boolean is we are is browser

// console them
console.log('Are we are under node? Answer: ', env.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', env.isBrowser); // writes, true or false

// we can import the functions also from it
console.log('Are we are under node? Answer: ', isNode());       // writes, true or false
console.log('Are we are under browser? Answer: ', isBrowser()); // writes, true or false

```
## Use it with globals
```
import 'dyna-universal';

console.log('Are we are under node? Answer: ', env.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', env.isBrowser); // writes, true or false

```

# Exported methods

## isNode():boolean

Returns if it run under node.js
 
## isBrowser():boolean

Returns if it run under a browser.

# Exported variables

## env: any

Is the node.js's `global` or browser's `window`.

## env.isNode: boolean

Is the result of the `isNode`, no need to call again the `isNode()`;

In node.js you can eval `isNode` == `true`;

In browser you can eval `isNode` == `false`;

## env.isBrowser: boolean

Is the result of the `isBrowser`, no need to call again the `isBrowser()`;

In node.js you can eval `isBrowser` == `true`;

In browser you can eval `isBrowser` == `false`;

# Global definition

_Only one._

## env

The `env` variable (where is the node.js's `global` or browser's `window`) is assigned globally.

So globally you can use the `env` without import it.