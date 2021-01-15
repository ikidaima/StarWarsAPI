;(function() {
  'use strict';

  window.creatElement = function(tagOfElem, contentOfElem, attributeOfElem) {
    debugger;
    const htmlElem = document.createElement(tagOfElem);
  
    htmlElem.textContent = contentOfElem;
  
    for (let item in attributeOfElem) {
      htmlElem.setAttribute(item, attributeOfElem[item]);
    }
  
    return htmlElem;
  };

})();

