let arr = [25, 67, 0, 9, -8, 56, 3, 21, 78, -65]

arr.forEach((element, index, array) => {
	if (element > array[0]) array[index] *= 2
});

document.write(`${arr}`)