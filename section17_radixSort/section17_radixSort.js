function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// solution course
function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function createBucket() {
	let buckets = [];
	for (let i = 0; i < 10; i++) {
		/// create bucket for each digit
		buckets.push([]);
	}
	return buckets;
}

// solution own
// function radixSort(arr) {
// 	let max = mostDigits(arr);
// 	let digit;
// 	let buckets;
// 	for (let i = 0; i <= max; i++) {
// 		buckets = createBucket(); // create the new buckets
// 		for (let j = 0; j < arr.length; j++) {
// 			//place numbers in buckets
// 			digit = getDigit(arr[j], i);
// 			buckets[(i, digit)].push(arr[j]);
// 		}

// 		// create new array with ordered numbers for each digit
// 		arr = [];

// 		for (let k = 0; k < buckets.length; k++) {
// 			arr = arr.concat(buckets[k]);
// 		}
// 	}
// 	return arr;
// }

// solution course
function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
    return nums;
}

let result = radixSort([213, 34, 453, 5987, 1, 345, 65]);
radixSort([23, 345, 5467, 12, 2345, 9852]);
console.log(result);
