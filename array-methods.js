const products = [
	{ name: `laptop`, brand: `lenovo`, price: 32000, color: `silver` },
	{ name: `laptop`, brand: `lenovo`, price: 32000, color: `silver` },
	{ name: `laptop`, brand: `lenovo`, price: 32000, color: `silver` },
	{ name: `laptop`, brand: `lenovo`, price: 32000, color: `silver` },
	{ name: `laptop`, brand: `lenovo`, price: 32000, color: `silver` },
	{ name: `laptop`, brand: `lenovo`, price: 32000, color: `silver` },
];
const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);
