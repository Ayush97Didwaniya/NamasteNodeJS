const fs = require("fs");

const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20897;

https.get("https://dummyjson.com/products/1", (res) => {
	console.log("Fetched Data successfully");
});

setTimeout(() => {
	console.log("setTimeout called after 5 sec");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
	console.log("File Data: ", data);
});

function multiplyFn(x, y) {
	const result = a * b;
	return result;
}

var c = multiplyFn(a, b);

console.log("multiplication result is: ", c);
