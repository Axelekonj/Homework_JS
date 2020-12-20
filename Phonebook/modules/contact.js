import * as fnc from './functions.js'

export class Contact {
   
    constructor(name, surname, email, age, number = []) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
        this.number = number;
    }

    handleEvent(evn) {
        let form = evn.currentTarget;

        switch(evn.type) {
            case "input": {
                if(fnc.validData(evn.target)) { 
                    fnc.setContactValues(this, form)
                }
            }   
            break;
            case "submit": {
                evn.preventDefault();

                let unvalidForm = fnc.errorInputs(form)
                
                if (!unvalidForm) {
                    fnc.checkExistContact(this)
                        .then(result => {
                            return new Promise((resolve, reject) => {
                                fnc.setFormNumbers(form.elements.phone, this.number)
                                resolve(this)}
                        )})
                        .then(result => {
                            fnc.setInStorage(result)
                            fnc.closeModal(form)
                            fnc.updateContactList(localStorage)
                            }, error => fnc.errorFormMessage(error, form))
                }
                
            }
            break;
            case "click": {
               if (evn.target.classList.contains('phone-add')) {
                    fnc.addPhoneInput(form)
               } else if (evn.target.classList.contains('modal-close')) {
                    fnc.closeModal(form)
               }
            }
            break;
        }
       
    }

    // toUppercase() {
    //     if(this.name[0].toLowerCase()) return this.name[0].toUpperCase()
    //     if(this.surname[0].toLowerCase()) return this.surname[0].toUpperCase()
    // }

    // toLowerCase() {
    //     if(this.email[0].toUppercase()) return this.email[0].toLowerCase()
    // }

    getFullName() {
        return (`${this.surname} ${this.name}`)
    }

    createThis(obj) {
        this.name = obj.name;
        this.surname = obj.surname;
        this.age = obj.age;
        this.email = obj.email;
        this.number = obj.number;
    }
}

// export class EditContact extends Contact {
//     constructor() {
//         super();
//     }

//     handleEvent(evn) {
//         let localContact = localStorage.getItem(this.getFullName())
//         let form = evn.currentTarget;

//         switch (evn.type) {
//             case "input": {
//                 console.log(localContact)
//                 if(fnc.validData(evn.target)) {
//                     fnc.setContactValues(this, form)
//                 }
//             } 
//             case "submit": {
//                 evn.preventDefault();
    
//                 let unvalidForm = fnc.errorInputs(form)
                
//                 if (!unvalidForm) {
//                     fnc.checkFormNumbers(form.elements.phone, this.number)
//                     fnc.editExistContact(this)
//                 }
//             }
//             break;
//             case "click": {
//                 if (evn.target.classList.contains('phone-add')) {
//                      fnc.addPhoneInput(form)
//                 } else if (evn.target.classList.contains('modal-close')) {
//                      fnc.closeModal(form)
//                 }
//              }
//              break;
//         }
//     }
// }
