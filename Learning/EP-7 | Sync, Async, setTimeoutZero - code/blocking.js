const crypto = require("node:crypto"); //core nodeJs module

console.log("Hello World");

var a = 1234;
var b = 12323;

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is generated");

// Async
// password Base key deravative function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
	console.log("second Key is generated", key);
});

function multiplyFn(x, y) {
	const result = a * b;
	return result;
}

var c = multiplyFn(a, b);

console.log("multiplication result is: ", c);
