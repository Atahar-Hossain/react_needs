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
