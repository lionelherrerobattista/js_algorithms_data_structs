// function insertionSort(arr) {
//     let auxIndex;
//     // pick the second element
//     for(let i = 1; i < arr.length; i++) {
//         auxIndex = i; // use aux to track moving element
//         // compare the second element to the one before
//         for(let j = i - 1; j >= 0; j--) {
//             // swap the element if necessary
//             if(arr[auxIndex] < arr[j]) {
//                 swap(arr, j, auxIndex);
//                 auxIndex--; // the element was moved one position
//             }
//         }
//     }

//     return arr;
// }

// function swap(arr, idx1, idx2) {
//     console.log(arr, idx1, idx2)
//     let aux = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = aux;
// }

console.log(insertionSort([3, 34, 22, 4, 7]));

function insertionSort(arr) {
	let j;
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j]; //we move the value to the right
			//the loop stops when arr[j] > currentVal
			//no need to continue looping
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
