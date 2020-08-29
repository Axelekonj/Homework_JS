var number = +prompt("enter the number");
var	errorMessage = "Enter more 10";
var amount = 0;

if (number > 10) {
	for (let i = 1; i <= number; i++) {
		amount ++;
	}
} else {
	alert(errorMessage);
}

alert(amount)