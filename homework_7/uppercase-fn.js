function filterUpperCase(string) {
	return [].filter.call(string, (item) => item == item.toUpperCase())
}

let result = filterUpperCase("ПриВЕт")
