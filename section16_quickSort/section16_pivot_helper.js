function swap(arr, index1, index2) {
	let aux = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = aux;
}

function pivot(arr, start = 0, end = arr.length - 1) {
	let currentIndex = 0; // to store the pivot index
	for (let i = start + 1; i <= end; i++) {
		if (arr[start] > arr[i]) {
			currentIndex++; // pivot should be moved one position
			if (currentIndex !== 0) {
				// first time don't swap pivot
				swap(arr, currentIndex, i); // swap values less than pivot
			}
		}
	}
	swap(arr, start, currentIndex); // put pivot at the end of lesser values
	return currentIndex;
}

let arr = [5, 2, 1, 8, 4, 7, 6, 3];
let result = pivot(arr);
console.log(arr, result);

// solution course
function pivot(arr, start = 0, end = arr.length + 1) {
	let pivot = arr[start]; // to store the pivot
	let swapIndex = start; // the index we are going to return

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++; // increment by one
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}
