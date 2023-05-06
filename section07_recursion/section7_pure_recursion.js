function collectOddValues(arr) {
	let newArr = []; // array for a single value

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1))); // concatenates the arrays to form a single one
	return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
