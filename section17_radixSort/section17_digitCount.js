// solution own
function digitCount(number) {
	let digits = 0;
	let aux = Math.abs(number);

	if (number === 0) return 1;

	while (aux > 1) {
		aux /= 10;
		console.log(aux);
		digits++;
	}
	return digits;
}

// solution course
function digitCount(num) {
	if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log("digits: ", digitCount(232131232112));
