const findThreeLargest = require("./solution")

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

const output = [18, 141, 541]

test("returns a sorted array of the three largest numbers from the argument array", () => {
	expect(findThreeLargest(array)).toEqual(output)
})
