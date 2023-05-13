//sort ascending
function numberCompareAsc(num1, num2) {
	return num1 - num2;
}

//sort descending
function numberCompareDesc(num1, num2) {
	return num2 - num1;
}

//sort string by length
function compareByLen(str1, str2) {
	return str1.length - str2.length;
}

console.log([6, 4, 15, 10].sort(numberCompareAsc));
console.log([6, 4, 15, 10].sort(numberCompareDesc));
console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));

