console.log("Hello World");

var a = 1078698;
var b = 20897;

setTimeout(() => {
	console.log("setTimeout called after 3 sec");
}, 3000);

function multiplyFn(x, y) {
	const result = a * b;
	return result;
}

var c = multiplyFn(a, b);

console.log("multiplication result is: ", c);
