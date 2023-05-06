// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

function recursiveRange(number) {
	// base case
	if (number === 1) {
		return number;
	}
	// recursive call
	return number + recursiveRange(number - 1);
}
