import './card-item';

class CardList extends HTMLElement {
  set animes(animes) {
    this._animes = animes;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML = `<h2 class="alert alert-danger text-center">${message} is not found</h2>`;
  }

  render() {
    this.innerHTML = '';

    if (this._animes.length === 0) {
      return this.innerHTML = '<h2 class="alert alert-danger text-center">Not found</h2>';
    }

    this._animes.forEach((anime) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.setAttribute('class', 'col-lg-3 col-md-4 col-6 mb-3');
      cardItemElement.anime = anime;
      this.appendChild(cardItemElement);
    });
  }
}

customElements.define('card-list', CardList);
