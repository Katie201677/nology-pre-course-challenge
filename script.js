const button = document.querySelector('.photo-container');

function rotatePhoto() {
//     let zindex = button.style.zIndex;
    let photos = button.querySelectorAll('.photo');
        for (let i=0; i<photos.length; i++) {
            let z = window.getComputedStyle(photos[i]).zIndex * 1;
            if (z === 3) {
                photos[i].style.zIndex = 1;
            } else {
                photos[i].style.zIndex = z + 1;
            }
            console.log(i, photos[i].style.zIndex);
        }
        
    console.log(photos);
}

button.addEventListener('click', rotatePhoto);