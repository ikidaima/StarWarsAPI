;(function() {
  `use strict`;

  const LIST_ITEM_TAG = `li`;
  const EMPTY_LIST_ITEM_CONTENT = `Ничего не найдено`;
  const LIST_ITEM_ATTRIBUTES = {
    class: `js-listItem`
  };

  window.createSubjectList = function(subjects, pathnameOfSearch) {

    if ( !subjects.length ) {
      return creatElement(LIST_ITEM_TAG, EMPTY_LIST_ITEM_CONTENT)
    }

    const fragment = document.createDocumentFragment();

    subjects.forEach(element => {
      const listItemElem = creatElement(LIST_ITEM_TAG, element.name, LIST_ITEM_ATTRIBUTES);

      listItemElem.addEventListener('click', () => {
        showSubjectDescription(element, pathnameOfSearch);
      });

      fragment.append(listItemElem);
    });

    return fragment;
  }

})();