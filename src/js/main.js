var debounce = require('lodash.debounce');

import fetchData from './fetch';
import createUrl from './createUrl';

function main() {
  refs = {
    gallery: document.querySelector('.gallery'),
    input: document.querySelector('[name=searchQuery]'),
  };

  refs.input.addEventListener(
    'input',
    debounce(async e => {
      const elementsArr = await fetchData(createUrl(e));

      if (elementsArr) {
        const parent = refs.gallery;
        parent.innerHTML = '';
        parent.append(...elementsArr);
      }
    }, 1000)
  );
}

export default main;
