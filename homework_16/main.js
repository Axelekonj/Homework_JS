class UserData {
    static users = [];
    constructor() {
        this.email = "";
        this.userName = "";
        this.password = "";
    }
    handleEvent(evn) {
        evn.preventDefault()
    
        switch(evn.type) {
            case "input": {
                evn.target.addEventListener('blur', function(evn) {
                    if (checkValid(evn.target)) {
                        switch(evn.target.id) {
                            case "email": {
                                user.email = evn.target.value;
                            }
                            break;
                            case "name": {
                                user.userName = evn.target.value;
                            }
                            break;
                            case "re-password": {
                                user.password = evn.target.value;
                            }
                            break;
                            default: {
                                break;
                            }
                        }
                        
                    }         
                })

                checkFormValid(evn.target.form)
            }
            break;
            case "submit": {
                UserData.setUserData(user)
                console.log(user)
            }
            break;
        }

        function checkFormValid(form) {
            let inputs = form.elements.input
            let btn = form.submit;

            for (let input of inputs) {
                if (input.value.length === 0 || input.classList.contains("error")) {
                    return
                }
            }

            btn.disabled = false
        }

        function checkValid(elem) {
            if (elem.value.length < 3) {
                elem.classList.add('error')
                showMessage(elem.nextElementSibling, "Минимальное колл-во символов 8")
                return false
            } 
            if (elem.id === "re-password" && elem.value !== elem.form.password.value) {
                elem.classList.add('error')
                showMessage(elem.nextElementSibling, "Неверный повтор пароля")
                return false
            } 
            elem.classList.remove('error')
            showMessage(elem.nextElementSibling)
            return true

            function showMessage(elem, text) {
                if (elem.classList.contains("visible")) {
                    elem.classList.remove('visible');
                }

                elem.classList.add('visible');
                elem.textContent = text;
            }
        }
    } 

    static setUserData(obj) {
        this.users.push(obj)
    }
}

let form = document.forms.registerForm;

let user = new UserData();

form.addEventListener("input", user);

form.addEventListener("submit", user);
