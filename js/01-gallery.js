import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryContainer: document.querySelector(`.gallery`),
    cardsMarkup: createImagesMarkup(galleryItems),
}


refs.paletteContainer.insertAdjacentHTML('afterbegin', refs.cardsMarkup);

function createImagesMarkup(images) {
    
    return images
        .map(({ preview, original, description }) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
         />
  </a>
</div>`
    ).join(``);
    
    
}
const galleryClick = (event) => {
    event.preventDefault();

    const currentImg = event.target.dataset.source;
    const currentAlt = event.target.alt;
}


const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`)

instance.show()