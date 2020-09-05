let array = [10, 'Hello world', null, true , '', false, 255];

 function explainer(arr) {
 	let filteredArray = deleteNegativeItem(arr);
 	let newArrayObject = createObject(filteredArray);

 	return newArrayObject;	
}

function deleteNegativeItem(arr) {
	let item,
	 	deleted;

	 	for (let i = 0; i < arr.length; i++) {
	 		item = arr[i];

	 		if(!checkNegativeValue(item)) {
	 			deleted = arr.splice(i--, 1)[0];
	 			getNegativeValues(deleted);
	 		} 
	 	}

	 	return array;
}

 function checkNegativeValue(item) {
 	if (item) {
 		return true;
 	} 

 	return false;
 }

function getNegativeValues(item) {
	let negativeItemArray = [];

	return negativeItemArray.push(item);
}

function createObject(arr) {

	 for (let i = 0; i < arr.length; i++) {
	 	let item = arr[i];
	 	delete arr[i];
	 	arr[i] = {};
	 	arr[i].type = typeof item;
	 	arr[i].value = item;

	 	if (typeof item === "string") {
	 		arr[i].length = item.length;
	 	}
	 }

	 return arr; 
}
