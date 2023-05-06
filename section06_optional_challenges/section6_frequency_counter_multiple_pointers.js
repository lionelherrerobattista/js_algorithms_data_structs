console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

function areThereDuplicates() {
	//edge case - check if there are arguments passed
	if (arguments.length === 0) {
		return false;
	}

	//create two pointers, left and right
	let left = 0;
	let right = left + 1;

	//while loop to check each element of array
	while (left < arguments.length - 1) {
		console.log(left, right);
		//if duplicate is found, return true
		if (arguments[left] === arguments[right]) {
			return true;
		} else if (right === arguments.length - 1) {
			//right reached the end of array,
			//move left, start search again
			left++;
			right = left + 1;
		} else {
			right++;
		}
	}
	//return false if no duplicates
	return false;
}

