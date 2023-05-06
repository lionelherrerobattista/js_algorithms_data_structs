console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

function isSubsequence(stringOne, stringTwo) {
	//string length 0 or less than stringOne, return false
	if (stringTwo.length === 0 || stringTwo.length < stringOne.length) {
		return false;
	}
	//while loop (or for?)
	let indexStringOne = 0;
	let indexStringTwo = 0;

	while (indexStringOne < stringOne.length) {
		//reach the end, all char present
		//compare chars, from stringOne and stringTwo
		if (indexStringTwo === stringTwo.length) {
			//if indexStringTwo equals to length of stringTwo return false
			return false;
		}

		console.log(stringOne[indexStringOne], stringTwo[indexStringTwo]);
		console.log(indexStringOne, indexStringTwo);

		if (stringOne[indexStringOne] === stringTwo[indexStringTwo]) {
			//if found, advance one in stringOne
			indexStringOne++;
			indexStringTwo++;
		} else {
			//if char in stringTwo not present,
			// advance to next char in string two
			indexStringTwo++;
		}
	}

	return true;
}