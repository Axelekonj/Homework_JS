function filterUpperCase(string) {
	return Array.from(string)
		   .filter((item) => item == item.toUpperCase())
	
}

let result = filterUpperCase("ПриВЕт")