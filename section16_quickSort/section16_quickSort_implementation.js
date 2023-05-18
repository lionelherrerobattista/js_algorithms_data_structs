function swap(arr, index1, index2) {
	let aux = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = aux;
}

// solution course
function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start]; // to store the pivot
	let swapIndex = start; // the index we are going to return

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIndex++; // increment by one
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		// left and right get smaller, get closer toghether
		let pivotIndex = pivot(arr, left, right);
		//left side
		quickSort(arr, left, pivotIndex - 1); //recursion
		//right side
		quickSort(arr, pivotIndex + 1, right); // recursion
	}
	return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
