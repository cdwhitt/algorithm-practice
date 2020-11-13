const productSum = require("./solution")

const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
const output = 12

test("returns the product sum of the special array", () => {
	expect(productSum(array)).toBe(output)
})
