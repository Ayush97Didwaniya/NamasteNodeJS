export function calculateSum1(a, b) {
	return a + b;
}

console.log("hello sum file is here");
// or

// module.exports = {
// 	calculateSum
// };

name = "test file"; // Will work in CJS but not in MJS because it will run in strict mode
// it will through name is not defined;
