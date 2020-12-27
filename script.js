const button = document.querySelector('.photo-container');

function rotatePhoto() {
    let photos = button.querySelectorAll('.photo');
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

button.addEventListener('click', rotatePhoto);