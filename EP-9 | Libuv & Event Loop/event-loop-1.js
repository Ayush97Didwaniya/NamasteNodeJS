const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", (err, data) => {
	console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);

function printA() {
	console.log("a=", a);
}

printA();
console.log("Last line of the file");

// a = 100
// Last line of the file
// Timer expired
// setImmediate
// File Reading CB
