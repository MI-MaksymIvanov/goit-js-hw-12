import axios from 'axios';

export const fetchImages = (searchedQuery, currentPage, perPage) => {
  const axiosOptions = {
    params: {
      key: '48264895-d0a6c310440d31e1e67da8433',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: perPage,
    },
  };

  return axios.get(`https://pixabay.com/api/`, axiosOptions);
};
