function isPalindrome(string) {
	let reverseString = ""
	for (let i = string.length - 1; i >= 0; i--) {
		reverseString += string[i]
	}
	return reverseString === string
}

function solution2(string) {
	let leftPointer = 0
	let rightPointer = string.length - 1

	while (leftPointer < rightPointer) {
		if (string[leftPointer] !== string[rightPointer]) {
			return false
		} else {
			leftPointer += 1
			rightPointer -= 1
		}
	}
	return true
}

module.exports = { isPalindrome, solution2 }
