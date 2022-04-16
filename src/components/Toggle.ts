class HnToggle extends HTMLElement {
    static get observedAttributes() {
        return ['open']
    }

    connectedCallback() {
        this.addEventListener('click', () => this.open = !this.open)
    }

    attributeChangedCallback() {
        if (this.open) {
            this.innerText = '[-]'
            this.classList.add('open')
        } else {
            this.innerText = '[+] comments collapsed'
            this.classList.remove('open')
        }
    }

    get open() {
        return this.hasAttribute('open')
    }

    set open(value: boolean) {
        value ? this.setAttribute('open', '') : this.removeAttribute('open')
    }
}

customElements.define('hn-toggle', HnToggle)
