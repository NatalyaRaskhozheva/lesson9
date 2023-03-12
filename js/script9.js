const arr = ['Іван', 'Наталя', 'Діана', 'Даша', 'Сергій']
let arrSecond = []

arr.forEach(element => {
	arrSecond.push(element[0])
});
document.write(`${arr}<br>`)
document.write(`${arrSecond}`)