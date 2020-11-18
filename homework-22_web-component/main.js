class AlertComponent extends HTMLElement {
    constructor() {
        super();

        this.text = {
            "error": "У вас ошибка",
            "success": "Вы успешно отправили сообщение",
            "info": "Вы получили новое сообщение",
        };

        this.classes = [
            "alert-danger",
            "alert-success",
            "alert-warning"
        ];
        // this.querySelector("span").addEventListener('click', () => {

        // })
    }

    connectedCallback() {
        let elemText = document.createElement('span');
        this.append(elemText)
        this.setAttribute("type", "error")
        this.setAttribute("message", "У вас ошибка")
        this.className = "alert alert-danger"
        console.dir(elemText)
        elemText.textContent = this.getAttribute("message");

    }

    disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['type', 'message', 'class']
    }

    attributeChangedCallback(name, prev, current) {
        switch(name) {
            case "error": 
            this.classList.add("alert-danger")
        }
    }
}

customElements.define('alert-component', AlertComponent)