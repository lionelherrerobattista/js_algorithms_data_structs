maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

//naive approach
// function maxSubarraySum(arr, num) {
// 	if (num > arr.length) {
// 		//edge case, if number is greater than the array length
// 		return null;
// 	}
// 	let max = -Infinity;
// 	//loop that goes until the end of the array - number of consecutive no to sum (num)
// 	for (let i = 0; i < arr.length - num + 1; i++) {
// 		let temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (temp > max) {
// 			max = temp;
// 		}
// 	}
// 	return max;
// }

//refactor
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null; //edge case
	//calculate the first sum up until num
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	//move the "sliding window"
	for (let i = num; i < arr.length; i++) {
		//substract first number arr[i - num]
		//add ONLY next number arr[i]
		//NOT NECESSARY to add every number again
		tempSum = tempSum - arr[i - num] + arr[i];
		//check if temp sum is greater than max
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}
