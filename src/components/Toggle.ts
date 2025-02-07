class HnToggle extends HTMLElement {
    #anchor: HTMLAnchorElement

    static get observedAttributes() {
        return ['open']
    }

    connectedCallback() {
        this.#anchor = this.querySelector<HTMLAnchorElement>('a')
        this.#anchor.addEventListener('click', () => this.open = !this.open)
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

    set open(value: boolean) {
        value ? this.setAttribute('open', '') : this.removeAttribute('open')
    }
}

customElements.define('hn-toggle', HnToggle)
