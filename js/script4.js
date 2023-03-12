function newArr(arr) {
	let secondArr = []
	for (let element of arr) {
		if (element > 20) {
			secondArr.push(element)
		}
	}
	return secondArr
}

const arr = [9, 167, 156, 3, 0, 110, 12, 450, 3, 2, 213, 24, 1]
const createArr = newArr(arr)

document.write(`${arr}<br>`)
document.write(`${createArr}`)