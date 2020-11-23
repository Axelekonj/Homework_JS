let menu = document.querySelector('#ul');
let menuBtns = document.querySelector('.diary-buttons');
let taskForm = document.forms.taskForm;

menu.addEventListener('mousdown', function(e) {
	e.preventDefault();
})

menu.addEventListener('click', function(e) {
	if (e.target === this) {
		clearSelect(this.children)
		return false;
	}

	if (e.ctrlKey) {
		removeSelect(e.target)		
	} else if (e.target.matches('.selected')) {
		clearSelect(this.children)
	} else {
		addSelect(e.target)
	}

	function clearSelect(elems) {
		for(let elem of elems) {
			elem.classList.remove('selected')
		}
	}
	
	function removeSelect(elem) {
		elem.classList.toggle('selected');
	}
	
	function addSelect(elem) {
		elem.classList.add('selected')
	}
})


class MenuButtons {
    constructor(elem) {
      this._elem = elem;
	  elem.onclick = this.onClick.bind(this);
    }

    addToStart() {
		let list = document.createElement('li');
		list.textContent = taskForm.elements.taskText.value;
		menu.prepend(list);
    }

    addToEnd() {
		let list = document.createElement('li');
		list.textContent = taskForm.elements.taskText.value;
		menu.append(list)
    }

    delete() {
		let lists = menu.children;
		
		for (let i = lists.length - 1; i >= 0; i--) {
			if (lists[i].classList.contains('selected')) {
				lists[i].remove();
			}
		}
	}
	
	sortBySelect() {
		
	}

    onClick(event) {  
		switch(event.target.dataset.action) {
			case "Prepend": this.addToStart();
			break;
			case "Append": this.addToEnd()
			break;
			case "Delete": this.delete();
			break;
			case "Sort": this.sortBySelect();
			break;
		}
    };
  }

new MenuButtons(menuBtns)

