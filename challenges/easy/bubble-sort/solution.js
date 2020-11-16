function bubbleSort(array) {
	let isSorted = false
	let counter = 0

	while (!isSorted) {
		isSorted = true
		for (index = 0; index < array.length - 1 - counter; index++) {
			if (array[index] > array[index + 1]) {
				swap(index, index + 1, array)
				isSorted = false
			}
		}
	}
	return array
}

function swap(currentIndex, nextIndex, array) {
	const temp = array[nextIndex]
	array[nextIndex] = array[currentIndex]
	array[currentIndex] = temp
}

module.exports = bubbleSort
