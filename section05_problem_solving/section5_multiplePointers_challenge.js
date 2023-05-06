console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// function countUniqueValues(arr) {
// 	//if empty return 0
// 	if (arr.length === 0) {
// 		return uniqueValues;
// 	}

// 	let left = 0;
// 	let right = left + 1;
// 	let uniqueValues = 0;

// 	while (right !== arr.length) {
// 		//if equal move one right
// 		if (arr[left] === arr[right]) {
// 			right++;
// 		} else {
// 			//move left and replace array with unique values
// 			left++;
// 			arr[left] = arr[right];
// 		}
// 	}

// 	//count index + 1
// 	uniqueValues = left + 1;

// 	return uniqueValues;
// }

function countUniqueValues(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}
