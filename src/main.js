import { fetchImages } from './js/pixabay-api.js';
import { createGalleryCardTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.show({
      title: 'Error:',
      message: 'Поле має бути заповнено!!',
      position: 'topRight',
    });
    return;
  }

  loaderEl.classList.remove('hidden');

  fetchImages(searchedQuery)
    .then(data => {
      loaderEl.classList.add('hidden');

      if (data.hits.length === 0) {
        iziToast.show({
          title: 'Error:',
          message: `За вашим запитом нічого не знайдено!`,
          position: 'topRight',
        });

        galleryEl.innerHTML = '';
        searchFormEl.reset();
        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');

      galleryEl.innerHTML = galleryTemplate;
      searchFormEl.reset();

      const lightbox = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => {
      loaderEl.classList.add('hidden');
      iziToast.show({
        title: 'Error',
        message: `Помилка: ${error.message}`,
        position: 'topRight',
      });
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
