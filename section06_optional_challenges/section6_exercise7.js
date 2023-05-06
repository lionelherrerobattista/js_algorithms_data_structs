console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

function maxSubarraySum(array, length) {
	// edge case - if length is greater than array
	// return false
	if (array.length < length) {
		return null;
	}

	let maxSum;
	let indexOne = 0;
	let sum = array[0];

	// sum the first element up until length
	for (let i = 1; i < length; i++) {
		sum += array[i];
	}
	// max is first sum
	maxSum = sum;

	// stop when indexTwo reached the last index of array
	for (let indexTwo = length; indexTwo < array.length; indexTwo++) {
		// move window
		// sum minus element in first index
		// add element in the index that follows
		sum = sum - array[indexOne] + array[indexTwo];
		if (sum > maxSum) {
			maxSum = sum;
		}
		indexOne++;
	}
	//return value for maxSum
	return maxSum;
}
