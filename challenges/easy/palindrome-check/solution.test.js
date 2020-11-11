const isPalindrome = require("./solution")

test("Returns 'true' if a word is a palindrome and 'false' if it is not", () => {
	expect(isPalindrome("abcdcba")).toBeTruthy()
	expect(isPalindrome("Chocolate chips")).toBeFalsy()
})
