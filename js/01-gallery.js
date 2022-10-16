import { galleryItems } from './gallery-items.js';

const imagesContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMurkup(galleryItems);
// console.log(cardsMarkup);

imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);


// console.log(galleryItems);
function createGalleryCardsMurkup(images) {
    return images.map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
  }).join("");
  
}
// console.log(images);
imagesContainer.addEventListener("click", onImagesContainerClick);
function onImagesContainerClick(evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
      return;
    }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

    // console.log(evt.target);
}

