// 1.template string
const numbers = [89, 35, 98, 12];
const student = {
	name: `salib khan`,
	age: 26,
	movies: [`king khan0`, `dhakar mastan`],
};
const about = `My Name is${student.name} age of ${student.age} has number ${numbers[2]}also liked movies ${student.movies[0]}`;
console.log(about);
