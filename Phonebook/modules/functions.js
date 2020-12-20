export function find(select) {
    return document.querySelector(select)
}

export function toggleModalForm() {
    let modal = find('#modal')  
        modal.classList.toggle('modal-visible')
}

export function validData(input) {
    input.dataset.error = "true";
    if(input.value.length > 3) {
        input.dataset.error = "false";
        return true  
    }
    return false  
}

export function errorInputs(form) {
    let errorCount = 0;

    for (let item of form.elements.dataInput) {
        validData(item);

        if(item.dataset.error === "true") {
            item.classList.add('error-input');
            errorCount++
        } else {
            item.classList.remove('error-input');
        }
    }
     
    return !!errorCount
} 

export function closeModal(form) {
        form.reset();
        toggleModalForm();
} 

export function addPhoneInput(form) {
    let phoneBox = form.phoneBox
    let cloneElem = phoneBox.firstElementChild.cloneNode(true);
        cloneElem.firstElementChild.value = ""
        phoneBox.append(cloneElem)
}

export function setContactValues(obj, form) {
    obj.name = form.name.value
    obj.surname = form.surname.value
    obj.email = form.email.value
    obj.age = form.date.value
}

export function setFormNumbers(inputs, arr) {
    if (inputs.length > 1) {
        inputs.forEach(item => {
            if (item.value.length === 10) {
                if(!arr.includes(item.value)) {
                    arr.push('+38' + ' ' + item.value)
                    return
                }
            } else {return}
        })
    }
    if (inputs.value.length === 10) {
        arr.push('+38' + ' ' + inputs.value)
    }
}

export function setFormInputs(form, obj) {
    form.name.value = obj.name
    form.surname.value = obj.surname
    form.email.value = obj.email
    form.date.value = obj.age
    form.phone.value = obj.number[0]  
}

export function errorFormMessage(text, field) {
    let textElem = document.createElement('span')
        textElem.className = 'form-error';
        textElem.textContent = text;
        field.append(textElem);
}

export function checkExistContact(obj) {
    return new Promise((resolve, reject) => {
        if (obj.local) {
            for (let [key, value] of Object.entries(localStorage)) {
                if (value === obj.local) {
                    localStorage.removeItem(key)
                    delete obj.local
                    resolve(obj)
                } 
            }
        } else {
            let contactName = obj.getFullName();

            for (let [name, value] of Object.entries(localStorage)) {
                if (name === contactName) {
                    if (JSON.parse(value).email === obj.email) {
                        reject('Такой контакт уже существует')
                    }
                } 
            }
            resolve(obj)
        } 
    })
} 

export function setInStorage(obj) {
    let contactJson = JSON.stringify(obj)
    let contactName = obj.getFullName();
    
    localStorage.setItem(contactName, contactJson)    
}

export function createListItem(obj, template, list) {
    let listTemplate = template.content.cloneNode(true)
        listTemplate.querySelector('.item__data-name').textContent = obj.name;
        listTemplate.querySelector('.item__data-surname').textContent = obj.surname;                
        listTemplate.querySelector('.item__data-email').textContent = obj.email;
        listTemplate.querySelector('.item__number-text').textContent = obj.number[0];

        list.append(listTemplate)
}

export function createContactList(local) {
    let template = find('#listItemTmpl');
    let list = find('#contactsList')

    for (let i = 0; i <= local.length - 1; i++) {
        let contact = local.key(i),
            current = JSON.parse(local.getItem(contact));
                
        setTimeout(() => {
            createListItem(current, template, list)
        }, 500)  
    }
}

export function updateContactList(local) {
    let contactItems = find('#contactsList')

    clearContactList(contactItems)
    createContactList(local)
}

export function clearContactList(list) {
    Array.prototype.forEach.call(list.children, item => setTimeout(() => item.remove(), 500))
}

export function findContactToName(string) {
    for (let [key, value] of Object.entries(localStorage)) {
        if (key.includes(string)) return JSON.parse(localStorage.getItem(key))
    }
    return false
}
