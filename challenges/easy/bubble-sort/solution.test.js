const bubbleSort = require("./solution")

const array = [8, 5, 2, 9, 5, 6, 3]
const sortedArray = [2, 3, 5, 5, 6, 8, 9]

test("uses the bubble sort algorithm to sort the input array", () => {
	expect(bubbleSort(array)).toEqual(sortedArray)
})
