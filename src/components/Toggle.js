class HnToggle extends HTMLElement {
    #anchor

    static get observedAttributes() {
        return ['open']
    }

    connectedCallback() {
        setTimeout(() => {
            this.#anchor = this.querySelector('a')
            this.#anchor.addEventListener('click', () => this.open = !this.open)
        })
    }

    attributeChangedCallback() {
        if (!this.#anchor) { return }

        if (this.open) {
            this.#anchor.innerText = '[-]'
            this.classList.add('open')
        } else {
            this.#anchor.innerText = '[+] comments collapsed'
            this.classList.remove('open')
        }
    }

    get open() {
        return this.hasAttribute('open')
    }

    set open(value) {
        value ? this.setAttribute('open', '') : this.removeAttribute('open')
    }
}

customElements.define('hn-toggle', HnToggle)
