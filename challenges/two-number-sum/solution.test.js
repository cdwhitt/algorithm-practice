const twoNumberSum = require("./solution")

const array1 = [3, 5, -4, 8, 11, -1, 6]
const target1 = 10
const solution1 = [-1, 11]

test("returns an array of integers (in any order) that adds up to the target sum", () => {
	expect(twoNumberSum(array1, target1).sort((a, b) => a - b)).toEqual(solution1)
})
