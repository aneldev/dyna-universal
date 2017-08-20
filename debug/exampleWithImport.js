import {env, isBrowser, isNode} from '../src';

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
