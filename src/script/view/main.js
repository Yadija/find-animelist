import DataAPI from '../data/data-api';

import '../components/app-bar';
import '../components/search-bar';
import '../components/card-list';
import '../components/loading-indicator';
import '../components/footer-bar';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const animeListElement = document.querySelector('card-list');
  const loadingIndicatorElement = document.querySelector('loading-indicator');

  loadingIndicatorElement.style.display = 'none';

  const onButtonSearchClicked = async () => {
    loadingIndicatorElement.style.display = 'block';

    try {
      const result = await DataAPI.searchAnime(searchElement.value);
      renderResult(result);
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

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
