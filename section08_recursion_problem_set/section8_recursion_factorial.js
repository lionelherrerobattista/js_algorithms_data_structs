console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

function factorial(number) {
	if (number === 0) {
		// base case
		return 1;
	}
	return number * factorial(number - 1); // recursive call
}
