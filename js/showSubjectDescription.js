;(function() {
  `use strict`;

  const personDataElem = document.querySelector(`.js-personData`);

  window.showSubjectDescription = function(subject, typeOfSubject) {
    const templateElem = document.querySelector(`.js-${typeOfSubject.replace('/', '')}Template`);
    const valueCellElems = templateElem.content.querySelectorAll(`[data-property]`);

    valueCellElems.forEach(element => {
      const property = element.dataset.property;
      const valueOfProperty = subject[property] instanceof Array ? subject[property].length : subject[property]
      element.textContent = valueOfProperty;
    });

    personDataElem.innerHTML = ``;
    personDataElem.append( templateElem.content.cloneNode(true) );
  };
})();