;(function() {
  'use strict';

  const formElem = document.querySelector('.js-form');
  const searchResultElem = document.querySelector('.js-searchResult');
  const starWarsAPI = new StarWarsAPI();

  formElem.addEventListener('submit', onFormSubmit);

  function onFormSubmit(event) {
    event.preventDefault();

    const pathnameOfSearch = formElem.elements.pathname.value;
    const parameterOfSearch = formElem.elements.search.value;
    
    starWarsAPI.getSubjectsOfSearch(pathnameOfSearch, parameterOfSearch)
      .then(subjects =>  {
        searchResultElem.innerHTML = '';
        searchResultElem.append( createSubjectList(subjects, pathnameOfSearch) );
      })
      .catch(alert);
  }
})();