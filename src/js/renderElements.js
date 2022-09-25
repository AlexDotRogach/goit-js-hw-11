import SimpleLightbox from 'simplelightbox';
import Notiflix from 'notiflix';
import fetchData from './fetch';
import createUrl from './createUrl';

async function renderElements(e, page, type) {
  const { dataArr, totalHits } = await fetchData(createUrl(e, page));
  const totalPages = Math.round(totalHits / dataArr.length);

  if (dataArr.length !== 0) {
    const parent = refs.gallery;

    if (type === 'start') {
      Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
      parent.innerHTML = '';
    }

    parent.append(...dataArr);

    var lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  }

  // we need this return so that we can remove a scroll listener.
  return page >= totalPages || totalPages === Infinity;
}

export default renderElements;
