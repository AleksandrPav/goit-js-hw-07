import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryContainer: document.querySelector(`.gallery`),
    cardsMarkup: createImagesMarkup(galleryItems),
}


refs.galleryContainer.insertAdjacentHTML('afterbegin', refs.cardsMarkup);

function createImagesMarkup(images) {
    
    return images
        .map(({ preview, original, description }) =>
`<li class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
    ).join(``);
    
    
}
refs.galleryContainer = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});



console.log(galleryItems);
