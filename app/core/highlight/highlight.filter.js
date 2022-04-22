angular.module('core').filter('highlightText', function () {
  return function (text, searchText) {
    if (!searchText) {
      return text;
    }
    const reg = new RegExp(searchText, 'ig');
    return text.replace(reg, (a) => `<span class="highlight-text">${a}</span>`);
  };
});
