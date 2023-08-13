function fetchImages(searchQuery, page = 1) {
  const apiKey = '38697614-c6fc80f9d9f8868a9a5571c50';

  // Константа яка визначає кількість зображень на одній сторінці
  const perPage = 12;

  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(
        `Sorry, there are no images matching your search query. Please try again.`
      )
    );
  });
}

const api = {
  fetchImages,
};

export default api;
