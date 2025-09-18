const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(() => console.log("Promise called"));

// Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", (err, data) => {
	console.log("File Reading CB");
});

process.nextTick(() => {
	setTimeout(() => console.log("2nd Timer"), 0);

	process.nextTick(() => console.log("Inner Next Tick"));

	console.log("next tick");
});

console.log("Last line of the file");

// Output:::::
// Last line of the file
// next Tick
// Inner Next Tick
// Promise Called
// TImer expired
// 2nd Timer
// setImmediate
// File Reading CB
