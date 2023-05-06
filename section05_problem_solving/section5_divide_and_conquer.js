search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1

//naive approach
function search(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

//refactor
function search(array, val) {
	let min = 0;
	let max = array.length - 1;

	while (min <= max) {
		let middle = Math.floor((miin + max) / 2);
		let currentElement = array[middle];

		if (array[middle] < val) {
			min = middle + 1;
		} else if (array[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
}
