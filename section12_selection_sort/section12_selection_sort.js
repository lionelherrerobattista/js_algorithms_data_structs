function selectionSort(arr) {
	// create variable min
	let min;
	let aux; // var to store swapped value

	// loop arr to sort it
	for (let i = 0; i < arr.length; i++) {
		// min = index to compare (element a)
		min = i;
		for (let j = i + 1; j < arr.length; j++) {
			// if min is greater, new min (store index)
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		// once end of the second loop, swap elements
		if (i !== min) {
			aux = arr[i];
			arr[i] = arr[min];
			arr[min] = aux;
		}
	}

	// return array
	return arr;
}

console.log(selectionSort([23, 4, 67, 11, 5]));
console.log(selectionSort([1, 4, 67, 11, 5]));

// solution
// function selectionSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let lowest = i;
// 		for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
// 	}
// 	return arr;
// }


// ES2015
// function selectionSort(arr) {
//     const swap = (arr, idx1, idx2) => 
//         ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// 	for (let i = 0; i < arr.length; i++) {
// 		let lowest = i;
// 		for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest) swap(arr, i, lowest);
// 	}
// 	return arr;
// }

console.log(selectionSort([34, 22, 10, 19, 17]));
