

function calculator(a, b, sign) {
	a = +prompt("enter a");
	b = +prompt("enter b");
	sign = prompt("enter the sign");

	switch (sign) {
		case "+" :
			return a + b;
			break;
		case "-" :
			return a - b;
			break;
		case "*" :
			return a * b;
			break;
		case "/" : 
			return a / b;
			break;
		default :
			alert("Error");
	};
};

calculator();