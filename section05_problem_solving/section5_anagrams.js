console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true

function validAnagram(string1, string2) {
	if (string1.length !== string2.length) {
		return false;
	}

	//initialize frequency counters (chars and repetitions)
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let char of string1) {
		frequencyCounter1[char]
			? (frequencyCounter1[char] += 1)
			: (frequencyCounter1[char] = 1);
	}
	for (let char of string2) {
		frequencyCounter2[char]
			? (frequencyCounter2[char] += 1)
			: (frequencyCounter2[char] = 1);
	}

	//compare
	for (let key in frequencyCounter1) {
		//check if same key, else false
		if (!(key in frequencyCounter2)) {
			return false;
		}

		//check same frequency, else false
		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}

	return true;
}

//Another example
// function validAnagram(first, second) {
// 	if (first.length !== second.length) {
// 		return false;
// 	}

// 	const lookup = {};

// 	for (let i = 0; i < first.length; i++) {
// 		let letter = first[i];
// 		//if letter exists, increment, otherwise set to 1
// 		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// 	}

// 	for (let i = 0; i < second.length; i++) {
// 		let letter = second[i];
// 		//can't find letter or letter is zero then it's not an anagram
// 		if (!lookup[letter]) {
// 			// 0 = falsy value
// 			return false;
// 		} else {
// 			lookup[letter] -= 1;
// 		}
// 	}

// 	return true;
// }
