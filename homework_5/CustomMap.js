let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

function customMap(array, cb) {
	let arr = [];

	for (let i = 0; i < array.length; i++) {
		let item = array[i];

	    if(!cb(item)) {
	      continue;
	    } else {
	    	arr.push(cb(item));
	    }
	}

	return arr;
}

let newUsers = customMap(users, function(item) {
	if (item.age < 30) return item.name;
});