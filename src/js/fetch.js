import Notiflix from 'notiflix';
import axios from 'axios';
import createElement from './createElement';

async function fetchData(url) {
  try {
    const { data } = await axios(url);

    if (data.total === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return {};
    }

    return {
      dataArr: data.hits.map(item => createElement(item)),
      totalHits: data.totalHits, // quantity of our pages
    };
  } catch {
    Notiflix.Notify.failure('all images are loaded');
    return {};
  }
}
export default fetchData;
