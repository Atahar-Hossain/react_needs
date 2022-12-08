//1. How to declare a variable using let and const
const fathersName = "M A Hoossain Rana";
let season = "winter";
season = "rainy";

// 2. How to write a conditions. 6 Basic Conditions

// > , <, ===, !==, <=, >=
// multiple conditions
// &&,

//3. array [], index Of, length, push, pop,

const numbers = [89, 35, 98, 12];

// 4. loop, for loop,
for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	console.log(number);
}

// 5.functions

function add(num1, num2) {
	const sum = num1 + num2;
	return sum;
}

const total = add(35, 78);
console.log(total);
