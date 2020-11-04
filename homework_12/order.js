class Order {
	status;
	constructor (config) {
		this.products = config.products;
		this.size = config.size;
	};
    
    set statusRate(value) {
    	this.status = value;
    };
    
    function getOnStatus(status) {
		return orderGroup.filter((item) => item.status == status)
    }
    
}