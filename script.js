const photoButton = document.querySelector('.photo-container');
const infoButton = document.querySelector('#infoButton');
let clicked = false;

function rotatePhoto() {
    let photos = photoButton.querySelectorAll('.photo');
    console.log(photos);
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
    let hiddenPara = document.querySelector('.hidden');
    hiddenPara.classList.toggle('revealed');
}

photoButton.addEventListener('click', rotatePhoto);
infoButton.addEventListener('click', moreInfo);