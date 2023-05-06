function stringSearch(str, pattern) {
	let matches = 0;
	let nextchar = 0; // to look next char on inner loop
	for (let i = 0; i < str.length; i++) {
		nextchar = i;
		for (let j = 0; j < pattern.length; j++) {
			// if the letters do not match, break the loop
			if (str[nextchar] !== pattern[j]) {
				break;
			}
			nextchar++; //advance one position, to compare
			// if the end of the pattern array has been reached,
			// increase match count
			if (j === pattern.length - 1) {
				matches++;
			}
		}
	}
	//return the matches
	return matches;
}

// console.log(stringSearch("wowomgzomg", "omg"));

//solution
function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));