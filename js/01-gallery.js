import { galleryItems } from "./gallery-items.js";

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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
galleryList.insertAdjacentHTML("beforeend", markup);


galleryList.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

      const instance = basicLightbox.create(`
          <img src="${event.target.dataset.source}" alt="${event.target.alt}"/>
      `,{
        onShow: () => { document.addEventListener("keydown", onEscPress) },
        onClose: () => {document.removeEventListener("keydown", onEscPress)}
      });
      instance.show();

      function onEscPress(event) {
        if (event.code === "Escape") {
          instance.close();
        }
      };
    }

