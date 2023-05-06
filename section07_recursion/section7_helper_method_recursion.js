function collectOddValues(arr) {
	let result = []; // variable to store the values

	function helper(helperInput) {
		// recursive function
		if (helperInput.length === 0) {
			// base case
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			// find odd values for first element
			result.push(helperInput[0]); // push it in result array
		}

		helper(helperInput.slice(1)); //recursive call, we exclude the first element
	}

	helper(arr);

	return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));