;(function() {
  `use strict`;

  window.StarWarsAPI = class {
    constructor() {
      this.mainUrl = `https://swapi.dev/api/`;
    }

    async getSubjectsOfSearch(pathnameOfSearch, parameterOfSearch) {
      parameterOfSearch = encodeURIComponent(parameterOfSearch);

      const url = `${this.mainUrl}${pathnameOfSearch}?search=${parameterOfSearch}`;

      return fetch(url)
        .then(response => {

          if (response.ok) {
            return response.json();
          }

          return Promise.reject(response.status + ' ' + response.statusText);
        })
        .then(answer => answer.results);
    }

  };

})();