console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
//unfinshed
function flatten(array) {
	//if length 0 return
	let newArray = [];
	console.log("array:", array);

	if (array.length === 0) {
		return newArray;
	}

	//check if value is an array
	if (Array.isArray(array[0])) {
		console.log("is array");
		newArray = newArray.concat(flatten(array[0]));
	}

	//return array flattened
	newArray = newArray.concat(flatten(array.slice(1)));
	console.log("new array: ", newArray);
	return newArray;
}

//solution
function flatten(oldArr) {
	var newArr = [];
	for (var i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}
