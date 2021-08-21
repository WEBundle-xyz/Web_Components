class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tooltipicon = document.createElement('span');
    tooltipicon.textContent = ' (?)';
    this.appendChild(tooltipicon);
  }
}

customElements.define('uc-tooltip', Tooltip);
