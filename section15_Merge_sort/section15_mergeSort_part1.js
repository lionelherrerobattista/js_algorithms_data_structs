function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		// while there is data in both
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

// function mergeSort(arr) {
// 	console.log(arr);
// 	// base case - until arr length is 0 or 1
// 	if (arr.length <= 1) {
// 		return arr;
// 	}

// 	// break array into halves - slice
// 	// recursive call
// 	// then return merged array
// 	return merge(
// 		mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
// 		mergeSort(arr.slice(Math.floor(arr.length / 2)))
// 	);
// }

// let result = mergeSort([3, 1, 45, 23, 5, 6]);
// console.log(result);

// Solution
function mergeSort(arr) {
	if (arr.length <= 1) return arr; // base case
	let mid = Math.floor(arr.length / 2); // get half point
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
