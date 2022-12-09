// 1. array destructuring

// 2. object destructuring
const { age, salary, location } = {
	name: `alu`,
	salary: 30000,
	location: `dhaka`,
	age: 26,
};
// or
const emoloyee = {
	ide: `VS code`,
	designation: `developer`,
	machine: `mac`,
	language: [`html`, `css`, `js`],
	specification: {
		height: 66,
		weight: 67,
		address: `kumarkhali`,
	},
};

const { machine, ide } = emoloyee;
const { weight, address } = emoloyee.specification;
// const { weight, address } = emoloyee?.specification;  (optional chaining)
