export function createGalleryCardTemplate(imgInfo) {
  return `<li class="gallery-card">
        <a href="${imgInfo.largeImageURL}" class="gallery-link">
          <img class="img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" width="360" />
          <div class="info-wrapper">
            <div class="img-info">
              <p class="label">Likes</p>
              <p class="value">${imgInfo.likes}</p>
            </div>
            <div class="img-info">
              <p class="label">Views</p>
              <p class="value">${imgInfo.views}</p>
            </div>
            <div class="img-info">
              <p class="label">Comments</p>
              <p class="value">${imgInfo.comments}</p>
            </div>
            <div class="img-info">
              <p class="label">Downloads</p>
              <p class="value">${imgInfo.downloads}</p>
            </div>
          </div>
        </a>
      </li>`;
}
