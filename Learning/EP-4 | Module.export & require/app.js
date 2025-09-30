const obj = require("./test.js"); // One module into another
const { calculateSum } = require("./calculate/sum - cjs.js");

const calculateMultiply = require("./calculate/multiply.js");

// if { "type": "module" } in package.json
// import { calculateSum1 } from "./sum - mjs.js";
// calculateSum1(6, 3);

console.log(global);

console.log(globalThis === global);

console.log(calculateSum(5, 3));

console.log(x);

var x = 2;

console.log(x);

console.log(obj.y);

console.log(calculateMultiply(3, 2));
