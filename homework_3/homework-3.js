let number = getRandomNumber();

function getRandomNumber(n) {
	n = Math.floor(Math.random() * 100); 
	return n;
}

checkNumber();

function askNumber(n) {
	n = prompt('Введите число от 1 до 100');
	
	if(validateNumber(n)) {
		return +n;
	}
	return false;
}

function validateNumber(number) {
	let valid = false;

	if(isNaN(number)) {
		alert('Надо число');
	} else if(number == null) {
		alert('Надо от 1 до 100');
	} else {
		valid = true;
	}
	return valid;
}

function hintMessage(n) {

	if(n < number) {
		return 'Это число меньше!';
	} else if(n > number) {
		return 'Это число больше!';
	} else if(n = number){
		return 'Это правильное число!';
	}
}

function checkNumber(attempts = 5) {
	let currentNumber = number;

	for (let i = attempts; i >= 1; i--) {
			let enterNumber = askNumber();
			if(enterNumber != currentNumber) {
				alert(
					`Осталось попыток: ${--attempts}
					${hintMessage(enterNumber)}`
					);
			} else {
				alert(`${hintMessage(enterNumber)}`);
				break;
			}
	}
	alert(`правильное число: ${currentNumber}`);
}


