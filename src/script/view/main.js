import DataAPI from '../data/data-api';

import '../components/app-bar';
import '../components/search-bar';
import '../components/card-list';
import '../components/card-detail';
import '../components/loading-indicator';
import '../components/footer-bar';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const animeListElement = document.querySelector('card-list');
  const detailElement = document.querySelector('card-detail');
  const loadingIndicatorElement = document.querySelector('loading-indicator');

  loadingIndicatorElement.style.display = 'none';

  const onButtonSearchClicked = async () => {
    loadingIndicatorElement.style.display = 'block';

    try {
      const result = await DataAPI.searchAnime(searchElement.value);
      renderResult(result);

      animeListElement.clickEventById = showResultDetail;
    } catch (message) {
      fallbackResult(message);
    } finally {
      loadingIndicatorElement.style.display = 'none';
    }
  };

  const renderResult = (results) => {
    animeListElement.animes = results;
  };

  const fallbackResult = (message) => {
    animeListElement.renderError(message);
  };

  const showResultDetail = async (id) => {
    const resultDetail = await DataAPI.searchAnimeById(id);
    detailElement.detail = resultDetail;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
