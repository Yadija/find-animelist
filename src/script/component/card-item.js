class CardItem extends HTMLElement {
  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card">
          <img src="${this._anime.images.jpg.large_image_url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">${this._anime.title}</h5>
          </div>
        </div>
    `;
  }
}

customElements.define('card-item', CardItem);
