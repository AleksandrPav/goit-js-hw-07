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
let instance = basicLightbox.create(``);

const galleryOpenModal = (event) => {
    event.preventDefault();
    instance = basicLightbox.create(`<img src="${event.target.dataset.source}"></img>`)
    instance.show();
}

refs.galleryContainer.addEventListener("click", galleryOpenModal);

const galleryCloseModal = (event) => {

    if(event.code === `Escape`){
        instance.close();}
    
}

refs.galleryContainer.addEventListener("keydown", galleryCloseModal);