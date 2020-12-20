import {Contact} from './modules/contact.js'
// import {EditContact} from './modules/contact.js'
import * as fnc from './modules/functions.js'

let addBtn = fnc.find('#addContact');
let modalForm = fnc.find('#newContactForm');
let contactsList = fnc.find('#contactsList')

fnc.createContactList(localStorage)

addBtn.addEventListener('click', fnc.toggleModalForm)

let contact = new Contact()

modalForm.addEventListener('focus', contact)
modalForm.addEventListener('click', contact)
modalForm.addEventListener('input', contact) 
modalForm.addEventListener('submit', contact)

contactsList.addEventListener('click', function(evn) {
    let parentBlock = evn.target.closest('.contacts-list__item')
        
    let name = parentBlock.querySelector('.item__data-name').textContent;
    let surname = parentBlock.querySelector('.item__data-surname').textContent;
    let fullName = `${surname} ${name}`;

    let localContactData = localStorage.getItem(fullName)
    let currentContactParse = JSON.parse(localContactData)

    if (evn.target.classList.contains('icon-edit')) {
        evn.stopPropagation();
        contact.createThis(currentContactParse)
        contact.local = localContactData
        fnc.toggleModalForm()
        fnc.setFormInputs(modalForm, contact)
    }
     else if (evn.target.classList.contains('icon-delete')) {
        localStorage.removeItem(fullName)
        setTimeout(() => parentBlock.remove, 250)

        fnc.updateContactList(localStorage)
    }
})

let searchForm = document.forms.searchForm
searchForm.addEventListener('click', function(evn) {
    
    let contactName = "";
    let template = fnc.find('#listItemTmpl')
    let searchInput = evn.currentTarget.elements.search
        searchInput.oninput = function() {
            contactName = this.value
        }
    
    this.onsubmit = function(evn) {
        evn.preventDefault()

        let contactData = fnc.findContactToName(contactName)
        console.log(contactData)
        if (!contactData) {
            fnc.errorFormMessage("Контакт отсутствует", this)
            console.log(this)
            return false
        }

        fnc.clearContactList(contactsList)
        fnc.createListItem(contactData, template, contactsList)
    }
}, true)
