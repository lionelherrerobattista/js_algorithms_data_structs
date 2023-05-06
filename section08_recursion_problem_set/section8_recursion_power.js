function power(base, exponent) {
	if (exponent === 0) {
		//base case
		return 1;
	}
	return base * power(base, exponent - 1); // recursive case
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16