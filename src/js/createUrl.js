function createUrl(e) {
  return `https://pixabay.com/api/?key=29995553-b74acab03e21cfb2e2b728488&q=${e.target.value}&image_type=photo&orientation=horizontal&safesearch=true`;
}

export default createUrl;
