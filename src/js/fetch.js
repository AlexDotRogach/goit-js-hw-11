import createElement from './createElement';

async function fetchData(url) {
  const response = await fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
  });

  const dataArr = response.hits.map(item => {
    return createElement(item);
  });

  return dataArr;
}

export default fetchData;
