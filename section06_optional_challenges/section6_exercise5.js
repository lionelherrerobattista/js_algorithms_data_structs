console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

//naive solution
// function averagePair(array, average) {
// 	//if array is empty
// 	if (array.length === 0) {
// 		return false;
// 	}
// 	//create variable for average
// 	let avg = 0;
// 	//2 for loops to get the average between 2 numbers
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			//get average
// 			avg = (array[i] + array[j]) / 2;
// 			//compare, return true if average is present
// 			if (avg === average) {
// 				return true;
// 			}
// 		}
// 	}

// 	//else, return false
// 	return false;
// 	//time complexity O(n^2)
// }

function averagePair(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		let avg = (arr[start] + arr[end]) / 2;
        console.log(start, end, avg, num);
		if (avg === num) return true;
		else if (avg < num) start++;
		else end--;
	}
	return false;
}
