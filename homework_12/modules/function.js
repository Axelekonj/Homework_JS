import {  Order, orderStore } from './order.js'

function setOrder() {
	let form = document.orderForm;
	let {size, products} = getOrderValues(form.elements);

	if (validateOrderProducts(products)) {
		errorMessage();
		return new Order({size, products}) 	
	} else {
		errorMessage('Добавь не меньше 3-х ингридиентов');
		return
    }
    
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

    function validateOrderProducts(item) {

        if (item.length >= 3) {
            return true;
        };
    
        return false;
    }

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

function orderFormToggle(value) {
	let formWrapper = document.querySelector('.pizza-wrapper')
	let orderInfo = document.querySelector('.order-info')
	formWrapper.style.display = value;

	if (formWrapper.style.display === 'none') {
		orderInfo.classList.add('visibility')
	} else {
		orderInfo.classList.remove('visibility')
	}
}

function showStatusMessage() {
	setTimeout(message, 500, "Идет приготовление...", "coocked");
	setTimeout(message, 5000, "Курьер забрал пиццу", "delivered");
	setTimeout(message, 10000, "Курьер доставил пиццу");
	setTimeout(message, 15000, "Оцените пожалуйста наш сервис...");
    setTimeout(showEvaluateOrder, 16000);
    
    function message(text, status) {
        let element = document.querySelector(".order__status > span");
        let currentOrder = orderStore.length - 1;
        
        if (status) {
            orderStore[currentOrder].status = status;
        } 
        element.textContent = text;
    }

    function showEvaluateOrder() {
        let evaluate = document.querySelector('.order__evaluate');
        evaluate.classList.toggle('visibility');
    
        function checkEventLike() {
            let evaluateIconsBlock = evaluate.firstElementChild	
            
            evaluateIconsBlock.addEventListener('click', (e) => {
    
                if (e) {
                    setTimeout(orderFormToggle, 3000, "block")
                    message("Cпасибо за ваш отзыв...")
                    showEvaluateOrder()
                }			
            });
        }
        setTimeout(checkEventLike, 500);
    }
}

export { setOrder, errorMessage, confirmPayment, orderFormToggle, showStatusMessage }