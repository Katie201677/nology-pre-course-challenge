const photoButton = document.querySelector('.photo-container');
const infoButton = document.querySelector('#infoButton');
const photos = photoButton.querySelectorAll('.photo');
const hiddenPara = document.querySelector('.hidden');
let clicked = false;

function rotatePhoto() {
    for (let i=0; i<photos.length; i++) {
        let z = window.getComputedStyle(photos[i]).zIndex * 1;
        if (z === photos.length) {
            photos[i].style.zIndex = 1;
        } else {
            photos[i].style.zIndex = z + 1;
        }
    }
}

function moreInfo() {
    hiddenPara.classList.toggle('revealed');
}

photoButton.addEventListener('click', rotatePhoto);
infoButton.addEventListener('click', moreInfo);