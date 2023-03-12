const number = parseInt(prompt('Введіть кількість елементів масиву', '0'))

function createArray(number) {
	arr = new Array(number).fill(1).fill(7, 5)
	return arr
}
createArray(number)

document.write(`${arr}`)