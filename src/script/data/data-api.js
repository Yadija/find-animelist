// Import axios
const axios = require('axios').default;

class DataAPI {
  static searchAnime({search, genre}) {
    return axios.get(`https://api.jikan.moe/v4/${genre}?q=${search}&sfw=true`)
      .then((response) => {
        return response.data;
      })
      .then((responseJson) => {
        if(responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`${keyword} is not found`)
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      })
  }
}

export default DataAPI;