const number = parseInt(prompt('Введіть кількість елементів масиву', '0'))

array = new Array(number)
array.fill(0)

document.write(`${array}`)