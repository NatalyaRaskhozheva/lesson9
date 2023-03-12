//let arr = ['AX6789', 'UJ7895', 'HA5687', 'AX4531', 'AX9056']
const amount = parseInt(prompt('Введіть кількість елементів', ''))
function createArr(amount) {
	let arr = []
	for (let i = 0; i < amount; i++) {
		const item = prompt('Введіть номер')
		arr.push(item)
	}
	return arr
}
const firstArr = createArr(amount)
document.write(`Масив - ${firstArr}<br>`)

let newArr = []
firstArr.forEach((element, index, array) => {
	if (element[0] === 'A') newArr.push(array[index])
});
document.write(`${newArr}<br>`)