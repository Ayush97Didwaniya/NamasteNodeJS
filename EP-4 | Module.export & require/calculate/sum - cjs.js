function calculateSum(a, b) {
	return a + b;
}

console.log("hello sum file is here");

module.exports = {
	calculateSum: calculateSum,
};

// or

// module.exports = {
// 	calculateSum
// };

// or
// console.log(module.exports) = {}
// module.exports.calculateSum = calculateSum;
