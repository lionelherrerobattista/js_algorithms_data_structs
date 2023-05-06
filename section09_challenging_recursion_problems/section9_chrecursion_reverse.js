function reverse(string) {
	if (string.length === 1) {
		// base case
		return string[0]; // return only element left of string
	}
	// concatenate last element
	// remove last element and pass new string to recursive function
	return string[string.length - 1] + reverse(string.slice(0, -1));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

//solution
// function reverse(str) {
// 	if (str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
