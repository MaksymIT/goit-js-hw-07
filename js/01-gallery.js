import { galleryItems } from "./gallery-items";

galleryList.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // const dataPreview = event.target.dataset.source;
  // const imgDesc = event.target.alt;

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

