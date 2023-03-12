const amount = parseInt(prompt('Введіть кількість елементів', '0'))
function createArray(amount) {
	let arr = []
	for (let i = 0; i < amount; i++) {
		const itemArray = parseFloat(prompt('Введіть елемент!', '0'))
		arr.push(itemArray)
	}
	return arr
}
const firstArray = createArray(amount)
document.write(`Масив - ${firstArray}<br>`)

let arrSecond = []
firstArray.forEach((element, index, array) => {
	if (element > 1000) arrSecond.push(element * 0.7)
});

document.write(`${arrSecond}`)