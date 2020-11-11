const { expect } = require("@jest/globals")
const { isPalindrome, solution2 } = require("./solution")

test("Returns 'true' if a word is a palindrome and 'false' if it is not", () => {
	expect(isPalindrome("abcdcba")).toBeTruthy()
	expect(isPalindrome("Chocolate chips")).toBeFalsy()
	expect(solution2("abcdcba")).toBeTruthy()
	expect(solution2("Chocolate chips")).toBeFalsy()
})
