//ES5
function swap(arr, idx1, idx2) {
	let temp = arr[idx1]; //store val in temp
	arr[idx1] = arr[idx2]; //replace the val in idx1
	arr[idx2] = temp; //update the value in idx2 with temp
}

//ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

function bubbleSort(arr) {
	//loop from the end of arr towards the beginning
	for (let i = arr.length - 1; i > 0; i--) {
		console.log(i);
		//inner loop with variable j, from beginning until i - 1
		for (let j = 0; j <= i - 1; j++) {
			console.log(`${arr[j]} > ${arr[j + 1]} ? ${arr[j] > arr[j + 1]}`);
			//compare arr[j] > arr[j+1]
			if (arr[j] > arr[j + 1]) {
				//swap
				swap(arr, j, j + 1);
			}
		}
		console.log(`array: [${arr}]`);
	}
	//return sorted array
	return arr;
}

console.log("Sorted array: ", bubbleSort([6, 4, 15, 10]));
