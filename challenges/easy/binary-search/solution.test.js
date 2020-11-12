const binarySearch = require("./solution")

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const target = 33
const output = 3

test("returns the index of the target number, otherwise -1", () => {
	expect(binarySearch(array, target)).toBe(output)
})
