class CardDetail extends HTMLElement {
  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    const {
      aired,
      background,
      duration,
      episodes,
      images,
      genres,
      rating,
      score,
      scored_by,
      season,
      source,
      status,
      studios,
      synopsis,
      title,
      type,
      year,
    } = this._detail;

    this.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col" tabindex="0">
            <img src="${images.webp.large_image_url || '-'}" class="lazyload card-img-top" alt="...">
          </div>
          <div class="col" tabindex="0">
            <h2 class="pb-3">${title || '-'}</h2>
            <p>${season || '-'} ${year || '-'} | ${type || '-'} | ${studios.map((studio) => studio.name).join(', ') || '-'}</p>
            <p>Rating: ${rating || '-'}</p>
            <p>Episode: ${episodes || '-'}</p>
            <p>Genre: ${genres.map((genre) => genre.name).join(', ') || '-'}</p>
            <p>Status: ${status || '-'}</p>
            <p>Source: ${source || '-'}</p>
            <p>Score: ${score || '-'} by ${scored_by ? scored_by.toLocaleString() : '-'} users</p>
            <p>Duration: ${duration || '-'}</p>
            <p>Aired: ${aired.string || '-'}</p>
          </div>
        </div>
        <div class="row">
          <div class="col" tabindex="0">
            <h4 class="mt-4">Synopsis</h4>
            <p>${synopsis || '-'}</p>
            <h4 class="mt-4">Background</h4>
            <p>${background || '-'}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-detail', CardDetail);
