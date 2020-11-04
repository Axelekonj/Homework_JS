
let inputs = document.getElementsByTagName('input');
let checkButton = document.querySelector('button');
let orderGroup = [];
let evaluate = document.querySelector('.order-evaluate');

class Order {
	status;
	constructor (config) {
		this.products = config.products;
		this.size = config.size;
	}

	get status() {
		return orderGroup.filter(item => item.status)
	}

	set status(value) {
		this.status = value
	}
}

checkButton.addEventListener('click', function() {
	let order = setOrder();

	if (order) {
		if (confirmPayment()) {

			orderGroup.push(order)
			hiddenOrderForm("none");
			showStatusMessage();
		} else {

			errorMessage('Оплата не произошла')
		}

	} else {

		return
	}
})


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

function setOrder() {
	let {size, products} = getOrderValues(inputs);
	let order;

	if (validateOrderProducts(products)) {

		order = new Order({size, products});
		errorMessage();
	} else {

		errorMessage('Добавь не меньше 3-х ингридиентов');
		return

	}

	return order;
}

function validateOrderProducts(item) {

	if (item.length >= 3) {
		return true;
	};

	return false;
}

function errorMessage(text) {

	let message = document.querySelector(".error--message");

	message.classList.toggle("visibility");
	message.textContent = text;

	if (!text) {

		message.classList.remove('visibility');

	}
}

function confirmPayment() {

	return confirm('Вы подтверждаете оплату?')
}

function hiddenOrderForm(value) {

	let formWrapper = document.querySelector('.pizza-wrapper')
	formWrapper.style.display = value;
}

let message = function(text, status) {

	let element = document.querySelector(".order-status > span");
	let currentOrder = orderGroup.length - 1;
	
	if (status) orderGroup[currentOrder].status = status;
	element.textContent = text;
	element.classList.add('visibility')
}

function showEvaluateOrder() {

	evaluate.classList.add('visibility')
}

function hideEvaluateOrder() {
	evaluate.classList.remove("visibility")
}

function checkEventLike() {
	let evaluateIconsBlock = evaluate.firstElementChild	

	evaluateIconsBlock.addEventListener('click', (e) => {

		hideEvaluateOrder();
		message("Cпасибо за ваш отзыв...", "delivered")
	});
}

function showStatusMessage() {

	setTimeout(message, 500, "Идет приготовление...", "coocked");
	setTimeout(message, 5000, "Курьер забрал пиццу", "delivered");
	setTimeout(message, 10000, "Курьер доставил пиццу", "delivered");
	setTimeout(message, 15000, "Оцените пожалуйста наш сервис...", "delivered");
	setTimeout(showEvaluateOrder, 16000)
	setTimeout(checkEventLike, 16500);
}






