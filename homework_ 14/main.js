let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
	e.preventDefault;
})

let ul = document.querySelector('#ul');

ul.addEventListener('mousdown', function(e) {
	e.preventDefault();
})

ul.addEventListener("click", function (e) {
	if (e.target == this) {
		return false;
	}

	if (!e.ctrKey) {
		clearSelected(this.children)
	}

	addSelected(e.target)
})

function clearSelected(elems) {
	for(let elem of elems) {
		elem.classList.remove('selected')
	}
}

function addSelected(target) {
	e.target.classlist.add('selected')
}