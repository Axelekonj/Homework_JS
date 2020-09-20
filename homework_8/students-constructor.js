function Student(number, arr) {
	this.studNumber = String(number);
	this.markArr = arr;
};

Student.prototype.averageMark = function(){
	let result = this.markArr.reduce((sum, current) => sum + current);

	return result / this.markArr.length;
};

Student.prototype.minMark = function(){
	let arr = this.markArr;

	return Math.min(...arr);
};

Student.prototype.maxMark = function(){
	let arr = this.markArr;
	
	return Math.max(...arr);
};


let firstStudent = new Student('Student 1', [10,9,8,1,10])


