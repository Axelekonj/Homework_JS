export let orderStore = [];

export class Order {
	status;
	constructor (config) {
		this.products = config.products;
		this.size = config.size;
	}

	getStoreByStatus(value) {
		return orderStore.filter(order => order.status === value)
	}

	getStoreBySize(value) {
		return orderStore.filter(order => order.size === value)
	}

}

