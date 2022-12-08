const products = [
	{ name: `laptop`, brand: `lenovo`, price: 62000, color: `silver` },
	{ name: `router`, brand: `tp-link`, price: 2000, color: `white` },
	{ name: `microphone`, brand: `BM-100`, price: 2500, color: `black` },
	{ name: `desktop`, brand: `dell`, price: 52000, color: `red` },
	{ name: `phone`, brand: `OnePlus`, price: 26000, color: `yellow` },
	{ name: `watch`, brand: `apple`, price: 40000, color: `green` },
];

// map return an array
const brands = products.map((product) => product.brand);
// console.log(brands);
const prices = products.map((product) => product.price);
// console.log(prices);

// for each dont return anything

const productsColor = products.forEach((product) => console.log(product.color));

// filter will return array after fullfilling condition
const cheap = products.filter((product) => product.price <= 40000);
// console.log(cheap);

const specificLetter = products.filter((product) => product.name.includes(`l`));
// console.log(specificLetter);

// find
const special = products.find((product) => product.name.includes(`o`));
console.log(special);
