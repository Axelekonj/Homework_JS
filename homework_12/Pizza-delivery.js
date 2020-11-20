import { orderStore } from "./modules/order.js"
import * as fnc from './modules/function.js'

let setOrderButton = document.querySelector('.order__btn');
let order;

setOrderButton.addEventListener('click', () => {
	 order = fnc.setOrder();
	
	if (order) {
		if(fnc.confirmPayment()) {
			orderStore.push(order);
			fnc.orderFormToggle("none");
			fnc.showStatusMessage();
		} else {
			fnc.errorMessage('Оплата не произошла')
		}
	} else {
		return
	}
});





















