var throttle = require('lodash.throttle');
import Notiflix from 'notiflix';
import renderElements from './renderElements';

function main() {
  const refs = {
    gallery: document.querySelector('.gallery'),
    input: document.querySelector('[name=searchQuery]'),
    form: document.querySelector('form'),
    body: document.querySelector('body'),
  };

  const throtUploadElements = throttle(uploadElements, 500);
  const clientHeight = window.screen.height;
  let page = 1,
    textInput = '',
    state;

  refs.input.addEventListener('input', e => (textInput = e.target.value));
  refs.form.addEventListener('submit', startSearch);

  async function uploadElements() {
    let { height } = document.documentElement.getBoundingClientRect();
    height -= clientHeight;

    if (document.documentElement.scrollTop > height) {
      state = await renderElements(textInput, (page += 1), 'upload');

      if (state) document.removeEventListener('scroll', throtUploadElements);
    }
  }

  function startSearch(e) {
    e.preventDefault();

    if (textInput) {
      page = 1;
      document.addEventListener('scroll', throtUploadElements);
      renderElements(textInput, page, 'start');
    }
  }
}

export default main;
