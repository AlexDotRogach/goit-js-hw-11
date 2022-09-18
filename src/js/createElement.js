function createElement({
  webformatURL = '',
  largeImageURL = '',
  tags = '',
  likes = 0,
  views = 0,
  comments = 0,
  downloads = 0,
} = {}) {
  const element = document.createElement('div');
  element.classList.add('photo-card');

  element.innerHTML = `
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
            <p class="info-item">
            <b>Likes: <br>${likes}</b>
            </p>
            <p class="info-item">
            <b>Views: <br>${views}</b>
            </p>
            <p class="info-item">
            <b>Comments: <br>${comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads: <br>${downloads}</b>
            </p>
        </div>
    `;

  return element;
}

export default createElement;

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
