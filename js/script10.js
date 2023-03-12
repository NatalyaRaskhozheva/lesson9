//const arr = [100, 670, 564, 346, 567, 20]
const amount = parseInt(prompt('Введіть кількість елементів', '0'))
function createArray(amount) {
	let arr = []
	for (let i = 0; i < amount; i++) {
		const itemArray = parseFloat(prompt('Введіть елемент', '0'))
		arr.push(itemArray)
	}
	return arr
}
const firsArray = createArray(amount)
document.write(`Створений масив - ${firsArray}<br>`)

let arrSecond = []
firsArray.forEach(element => {
	arrSecond.push(element * 0.2)
});
document.write(`${arrSecond}`)



