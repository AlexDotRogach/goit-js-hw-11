function createUrl(text, page) {
  return `https://pixabay.com/api/?key=29995553-b74acab03e21cfb2e2b728488&q=${text}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
}

export default createUrl;
