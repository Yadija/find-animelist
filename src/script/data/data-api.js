class DataAPI {
  static searchAnime({search, genre}) {
    return fetch(`https://api.jikan.moe/v4/${genre}?q=${search}&sfw=true`)
      .then((response) => {
        return response.json();
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