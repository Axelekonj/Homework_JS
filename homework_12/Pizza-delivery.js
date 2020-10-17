

class Order {
	status = ['ordered', 'coocked', 'delivered'];
	constructor (config) {
		this.products = config.products;
		this.size = config.size;
	};

}

class exampleOrder extends Order {
	constructor({size, products, status}) {
		super({size, products});
	};

}

let inputs = document.getElementsByTagName('input');

function getOrderValues(arr) {
	
	let products = [],
	size = " ";
	
	Array.prototype.forEach.call(arr, function(item) {
		if (item.checked) {
			if (item.type == "radio") {
				size = item.value;
			} else if (item.type == "checkbox") {
				products.push(item.value);
			}
		}
	});

	return {size, products}
}

function setOrder(){
	let {size, products} = getOrderValues(inputs);
	let order;

	if (validateOrderProducts(products)) {

		message.classList.remove('visibility')
		

	} else {

		message.classList.add('visibility');
		return null

	}

	return order = new exampleOrder({size, products});
}

function validateOrderProducts(item) {

	if (item.length >= 3) {
		return true;
	};

	return false;
}

let checkButton = document.querySelector('button');
let orderGroup = [];
let message = document.querySelector(".error--message");

checkButton.addEventListener('click', function() {
	let order = setOrder();

	let confirmPayment = confirm('Вы подтверждаете оплату?');

	if(confirmPayment) {
		orderGroup.push(order)
	}
})




