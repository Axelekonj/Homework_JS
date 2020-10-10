let orderForm = document.forms[0];
let setPizzaButton = document.querySelector('.order__btn');

let checkRadio = Array.from(orderForm.elements.size);
let checkRadioChecked;

let checkBox = Array.from(orderForm.elements.checkbox)
let checkBoxChecked;

class Order {
	constructor (config) {
		this.size = config.size;
		this.products = config.products;
		this.status = config.status;
	}

}

class getNewOrder extends Order {
	constructor({size, products, status}) {
		super({size, products, status});
	};
}

let newOrder;

setPizzaButton.addEventListener('click', function (){
	checkRadioChecked = checkRadio.find((item) => item.checked);
	// checkBoxChecked = checkBox.map((item) => item.checked)

	newOrder = new getNewOrder({
		size: checkRadioChecked.value,
		// checkBoxChecked
	})

	});


