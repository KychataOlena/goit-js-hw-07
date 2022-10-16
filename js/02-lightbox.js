
// Change code below this line
import { galleryItems } from "./gallery-items.js";

const imagesContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMurkup(galleryItems);
// console.log(cardsMarkup);

imagesContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// console.log(galleryItems);
function createGalleryCardsMurkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" 
    href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join("");
}

const lightboxSettings = {
    captions: true,
  captionsData: "alt",
  captionDelay: 250,
}
const lightbox = new SimpleLightbox(".gallery a", lightboxSettings);


console.log(galleryItems);
