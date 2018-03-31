import {envGlobal, isBrowser, isNode} from '../src/index';

// we import the `env`
envGlobal;            // is the node.js's global or browser's window
envGlobal.isNode;     // boolean if we are in node
envGlobal.isBrowser;  // boolean is we are is browser

// console them
console.log('Are we are under node? Answer: ', envGlobal.isNode);       // writes, true or false
console.log('Are we are under browser? Answer: ', envGlobal.isBrowser); // writes, true or false

// we can import the functions also from it
console.log('Are we are under node? Answer: ', isNode());       // writes, true or false
console.log('Are we are under browser? Answer: ', isBrowser()); // writes, true or false
