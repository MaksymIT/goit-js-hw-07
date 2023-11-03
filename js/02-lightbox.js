import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"/>
        </a>
      </li>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", markup);

const lightboxModal = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    optionsPosition: 'bottom',
    captionDelay: 250,
});