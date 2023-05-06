console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

function sameFrequency(numberOne, numberTwo) {
	//convert numbers to strings
	numberOne = numberOne.toString();
	numberTwo = numberTwo.toString();

	//Compare the lenght,
	//if not equal, return false
	if (numberOne.length !== numberTwo.length) {
		return false;
	}

	//create two objects to count and compare frequencies
	let frequencyCounterOne = {};
	let frequencyCounterTwo = {};

	//analyze the numbers
	for (let num of numberOne) {
		frequencyCounterOne[num] = frequencyCounterOne[num]
			? frequencyCounterOne[num]++
			: 1;
	}
	for (let num of numberTwo) {
		frequencyCounterTwo[num] = frequencyCounterTwo[num]
			? frequencyCounterTwo[num]++
			: 1;
	}

	//Compare the objects,
	for (let key in frequencyCounterOne) {
		//if key is not in counter, return false
		if (!(key in frequencyCounterTwo)) {
			return false;
		}
		//if frequency is different, return false
		if (frequencyCounterOne[key] !== frequencyCounterTwo[key]) {
			return false;
		}
	}
	//return true if same frequency
	return true;
}


