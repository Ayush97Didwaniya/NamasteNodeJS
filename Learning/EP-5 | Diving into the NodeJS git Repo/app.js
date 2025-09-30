function x() {
	const a = 10;

	function b() {
		console.log("b");
	}
}

console.log(a);

// require("./xyz");
// function (module, require, ... ) {
// All the code of the module is wrapped inside a function(IIFE)
// }

// IIFE - immediately invoked function expression

(function () {})();
