function createProduct(arr) {
	let product = 1
	for (let element of arr) {
		if (element > 0) product *= element
	}
	return product
}
const arr = [9, 167, -156, 3, 0,]
const arrProduct = createProduct(arr)

document.write(`${arr}<br>`)
document.write(`${arrProduct}`)

