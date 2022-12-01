// Import axios
const axios = require('axios').default;

class DataAPI {
  static searchAnime({ search, genre }) {
    return axios.get(`https://api.jikan.moe/v4/${genre}?q=${search}&sfw=true`)
      .then((response) => response.data)
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        }
        return Promise.reject(`${keyword} is not found`);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  }

  static searchAnimeById(id) {
    return axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => response.data)
      .then((responseJson) => responseJson.data)
      .catch((error) => console.log(error));
  }
}

export default DataAPI;
