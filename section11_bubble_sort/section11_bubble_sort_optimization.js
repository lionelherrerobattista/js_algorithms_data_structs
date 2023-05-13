//ES5
function swap(arr, idx1, idx2) {
	let temp = arr[idx1]; //store val in temp
	arr[idx1] = arr[idx2]; //replace the val in idx1
	arr[idx2] = temp; //update the value in idx2 with temp
}

function bubbleSort(arr) {
    let noSwaps; // to short circuit if no swaps 
	//loop from the end of arr towards the beginning
	for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
		//inner loop with variable j, from beginning until i - 1
		for (let j = 0; j < i - 1; j++) {
			//compare arr[j] > arr[j+1]
			if (arr[j] > arr[j + 1]) {
				//swap
				swap(arr, j, j + 1);
                noSwaps = false;
			}
		}
        if(noSwaps) break; //it's finished sorting
	}
	//return sorted array
	return arr;
}

console.log("Sorted array: ", bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
