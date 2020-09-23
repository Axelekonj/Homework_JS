function Human(config) {
	this.name = config.name;
	this.surname = config.surname;
	this.age = config.age;
};

Human.prototype = {
	getFullName() {
		return `${this.surname} ${this.name}`;
	},
	setFullName(fullName) {
		[this.name, this.surname] = fullName.split(" ");
	}
};

function Student(config){
	Human.call(this, config);

	this.markArr = config.markArr;
};

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype = Object.assign(Student.prototype, {

	getFullName() {
		return `${this.surname} ${this.name} - student`;
	},

	averageMark(){
		let result = this.markArr.reduce((sum, current) => sum + current);

		return result / this.markArr.length;
	},

	minMark(){
		let arr = this.markArr;

		return Math.min(...arr)
	},

	maxMark(){
		let arr = this.markArr;

		return Math.max(...arr);
	},
});

function Teacher(config){
	Human.call(this, config);
	this.group = config.group;
};

Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype = Object.assign(Teacher.prototype, {

	getListOfNamesByAverageMark() {
		// НЕДОДУМЫВАЮСЬ!!! ПОЗЖЕ РЕШУ....
	},
	getStudentByName(name) {
		return this.group.find((item) => item.name == name);
	},
	removeStudentByName(name) {
		let index = this.group.findIndex((item) => item.name == name);
		this.group.splice(index, 1);
	},
	updateStudentByName(student, name) {

		let index = this.group.findIndex((item) => item.name == name);

		this.group.splice(index, 1, student);
	}
});


let group = [new Student({
	name: "Dmitry",
	surname: "Popov",
	age: 25,
	markArr: [2, 3, 5, 7, 8,],
}), 
	new Student({
	name: "Alex",
	surname: "Filin",
	age: 27,
	markArr: [5, 7, 5, 8, 10,],
}),
	new Student({
	name: "Sergei",
	surname: "Drujko",
	age: 23,
	markArr: [3, 7, 10, 6, 9,],
}),
	new Student({
	name: "Alena",
	surname: "Cherepchuk",
	age: 24,
	markArr: [7, 7, 9, 6, 6,],
}),
	new Student({
	name: "Julia",
	surname: "Suhoviy",
	age: 30,
	markArr: [2, 3, 5, 7, 8,],
}),]

let teacher = new Teacher({group})



