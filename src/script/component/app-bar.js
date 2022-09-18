class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 fixed-top">
        <div class="container">
          <a class="navbar-brand text-light" href="#">Find AnimeList</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
