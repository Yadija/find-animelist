// data
import DataAPI from '../data/data-api';

// component
import '../component/app-bar';
import '../component/search-bar';
import '../component/card-list';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const animeListElement = document.querySelector('card-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataAPI.searchAnime(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
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
