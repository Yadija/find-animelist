class loadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loading-indicator-overlay"></div>
      <div class="loading-indicator"></div>
    `;
  }
}

customElements.define('loading-indicator', loadingIndicator);
