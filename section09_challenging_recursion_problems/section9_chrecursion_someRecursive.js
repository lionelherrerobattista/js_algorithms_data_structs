// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
	let condition = false;

	// array length === 0, return
	if (array.length === 0) {
		return false;
	}

	//call callback on first element of array
	condition = callback(array[0]);

	if (condition) {
		// if condition is true, return
		return condition;
	}

	//reduce the array by one
	return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

//solution
function someRecursive(array, callback) {
	if (array.length === 0) return false;
	if (callback(array[0])) return true;
	return someRecursive(array.slice(1), callback);
}
