let inputs = document.querySelector('.student-form').children;
let sendButton = document.querySelector('.student-btn');
let studentInfo = document.querySelector('.student-info');
let	studentList = studentInfo.querySelector('ol');
let studentListItems = studentList.children;
let	studentInfoButton = studentInfo.querySelector('.info-btn');


class Human {
	constructor(config) {
		this.name = config.name;
		this.surname = config.surname;
		this.age = config.age;
	}

}

class Student extends Human {
	constructor({name, surname, age, marks}) {
		super({name, surname, age});
		this.marks = marks;
	}

	averageMark() {
		let result = this.marks.reduce((sum, current) => sum + current);

		return result / this.marks.length;
	}

	get fullName() {
		return (`${this.surname} ${this.name}`);
	}

	set fullName(value) {
		[this.surname, this.name] = value.split(" ");
	}
} 


class Teacher extends Student {
	constructor({name, surname, age, marks}) {
		super({name, surname, age, marks});
		this.group = [];
	}
}

let teacher = new Teacher({});


sendButton.addEventListener('click', createStudent);

studentInfoButton.addEventListener('click', showStudentInfo);

function createStudent() {
	
	let student = new Student({
		name: inputs.name.value,
		surname: inputs.surname.value, 
		age: inputs.age.value,
		marks: inputs.marks.value.split(', '),
	});

	clearInputsValue();

	if (validateForm(student)) {

		teacher.group.push(student);
		teacher.group.sort((a, b) => b.averageMark() - a.averageMark());
	}
}

function validateForm(obj) {

	for (let prop in obj) {

		if (obj[prop] === "") return false;
	}

	return true;
}

function clearInputsValue() {

	for (let input of inputs) {

		input.value = "";
	}
}

function createListOfStudent(item) {
 	let listElement = document.createElement('li');
 		listElement.classList.add('list__item');
		listElement.textContent = `${item.surname} ${item.name} Средний балл: ${item.averageMark()}`;

		if (checkStudentList(listElement)) {

			studentList.prepend(listElement)
		} else {

			return
		}
}

function checkStudentList(elem) {

	for(let item of studentListItems) {

		if (item.textContent.includes(elem.textContent)) {

			return false;

		}
	}

	return true;
}

function clearListOfStudent() {

	for (let item of studentListItems) {
		item.remove();
	}
}

function showStudentInfo() {
	if (!studentListItems.length === 0) {

		clearListOfStudent();
	}

	teacher.group.forEach(item => createListOfStudent(item))
};










