// solution course
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function digitCount(num) {
	if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


console.log(mostDigits([23,567,89,12234324,90]));