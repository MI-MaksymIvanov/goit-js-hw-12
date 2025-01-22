export function fetchImages(searchedQuery) {
  const searchParams = new URLSearchParams({
    key: '48264895-d0a6c310440d31e1e67da8433',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
