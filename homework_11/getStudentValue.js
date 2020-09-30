let name = document.getElementsByTagName('input[name="name"]').value,
	surname = document.getElementsByTagName('input[name="surname"]').value,
	age = document.getElementsByTagName('input[name="age"]').value,
	marks = document.getElementsByTagName('input[name="marks"]').value;

class Student {
	constructor(config) {
		this.name = config.name;
		this.surname = config.surname;
		this.age = config.age;
		this.marks = config.marks;
	}
} 

class Teacher extends Student {
	constructor(name, surname, age, marks) {
		super(name, surname, age, marks);
		this.group = [];
	}
}


let teacher = new Teacher({name, surname, age, marks});

function getValues() {
	teacher.group.push(new Student({name, surname, age, marks}));
}


// class Human {
// 	constructor(config) {
// 		this.name = config.name;
// 		this.surname = config.surname;
// 		this.age = config.age;
// 	}

// 	get fullName() {
// 		return (`${this.surname} ${this.name}`);
// 	}

// 	set fullName(value) {
// 		[this.surname, this.name] = value.split(" ");
// 	}
// }




