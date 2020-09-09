let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

function customMap(array, cb) {
	let item = [];
	for (let i = 0; i < array.length; i++) {

		cb(item, array[i]);
	}

	return item;
}

let mapCallBack = function(item, index) {
		return item.push(index);		
};

let newUsers = customMap(users, mapCallBack);