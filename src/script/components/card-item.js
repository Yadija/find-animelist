class CardItem extends HTMLElement {
  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card" tabindex="0">
          <img src="${this._anime.images.webp.image_url}" class="lazyload card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center pe-auto" data-id="${this._anime.mal_id}" data-bs-toggle="modal" data-bs-target="#modalDetail">${this._anime.title}</h5>
          </div>
        </div>
    `;
  }
}

customElements.define('card-item', CardItem);
