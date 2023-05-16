// Solution own
// function merge(arr1, arr2) {
// 	let i = 0;
// 	let j = 0;
// 	let mergedArray = [];
// 	while (i < arr1.length && j < arr2.length) {
// 		//check which element is smaller
// 		if (arr1[i] < arr2[j]) {
// 			mergedArray.push(arr1[i]);
// 			i++; // advance one position
// 		} else {
// 			// repeat case for the other array
// 			mergedArray.push(arr2[j]);
// 			j++;
// 		}
// 	}

// 	// if one of the two arrays are exhausted
// 	// push all remaining elements of the other array
// 	if (i === arr1.length || i === 0) {
// 		for (; j < arr2.length; j++) {
// 			mergedArray.push(arr2[j]);
// 		}
// 	}

// 	if (j === arr2.length || j === 0) {
// 		for (; i < arr1.length; i++) {
// 			mergedArray.push(arr2[i]);
// 		}
// 	}

// 	return mergedArray;
// }

// let result = merge([1, 10, 50], [2, 14, 99, 100]);
// console.log(result);

// Solution 
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) { // while there is data in both
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// let result = merge([1, 10, 50], [2, 14, 99, 100]);
let result = merge([], [1, 3]);
console.log(result);
