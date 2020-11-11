function isPalindrome(string) {
	let reverseString = ""
	for (let i = string.length - 1; i >= 0; i--) {
		reverseString += string[i]
	}
	return reverseString === string
}

module.exports = isPalindrome
