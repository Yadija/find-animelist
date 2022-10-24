/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return {
      search: this.querySelector('#searchElement').value,
      genre: this.querySelector('#inputGenre').value,
    };
  }

  render() {
    this.innerHTML = `
      <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center mb-3">Search Anime/Manga</h1>
          <div class="d-flex" role="search">
            <div class="input-group">
              <select id="inputGenre" class="input-group-text">
                <option value="anime" selected>Anime</option>
                <option value="manga">Manga</option>
              </select>
              <input id="searchElement" class="form-control me-2 pe-5" type="search" placeholder="Search Here...">
            </div>
            <button id="searchButtonElement" class="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
