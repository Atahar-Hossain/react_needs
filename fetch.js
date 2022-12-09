//1. JSON stringfy and JSON parse
const students = {
	name: `abdul halim`,
	age: 26,
	year: `2nd`,
	address: `dhaka`,
};

console.log(students);

const studentsStringify = JSON.stringify(students);
console.log(studentsStringify);

const studentsParse = JSON.parse(studentsStringify);
console.log(studentsParse);

// 2. fetch
fetch(`url`)
	.then((res) => res.json())
	.then((data) => console.log(data));

// 3. keys and values
const keys = Object.keys(students);
const values = Object.values(students);

// 4. for
const numbers = [23, 54, 67, 87, 23, 78];

numbers.forEach((num) => console.log(num)); //if we dont want to get any return from array
numbers.map((num) => num * 2); //if we want to get return something from array

/* --------------------

study on for in, for each, for of, and map
study on  module 42-5  !this is important!
 =------------------*/
const newProduct = { name: `webcam`, price: 700, brand: `lal` };
const newProducts = [...products, newProduct];
// create a new array without one specific item

const remaining = products.filter((product) => product.name !== `phone`);
