import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    paletteContainer: document.querySelector(`.gallery`),
    cardsMarkup: createImagesMarkup(galleryItems),
    link: document.querySelector(`.gallery__link`)
}
console.log(refs.link)
// refs.link.addEventListener(`click`, removeLink) 
// const removeLink = function (e) {
//         e.preventDefault();
//     };   


refs.paletteContainer.insertAdjacentHTML(`beforeend`, refs.cardsMarkup);

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
