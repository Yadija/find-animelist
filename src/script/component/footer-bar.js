class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="mt-4 text-center">
      <p class="fs-6 px-5">Copyright ©${(new Date().getFullYear())} - Find Animelist created by Yadija</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
