function productSum(array, multiplier = 1) {
	let sum = 0

	for (const value of array) {
		if (Array.isArray(value)) {
			sum += productSum(value, multiplier + 1)
		} else {
			sum += value
		}
	}
	return sum * multiplier
}

module.exports = productSum
