function factorial(num) {
	// 2 - find base case
	if (num === 1) return 1;
	return num * factorial(num - 1); // 1 - identify recursive call
}

console.log(factorial(3));