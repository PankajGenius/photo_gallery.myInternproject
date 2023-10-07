
const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close-btn');
const nextBtn = document.querySelector('.next-btn');

// Get all images in the gallery
const images = gallery.querySelectorAll('.image img');
let currentImageIndex = 0; // Track the currently displayed image

// Function to open the lightbox and display a specific image by index
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxContent.src = images[index].src;
    currentImageIndex = index;
}

// Function to navigate to the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop to the first image after the last
    openLightbox(currentImageIndex);
}

// Add click event listeners to each image in the gallery
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        openLightbox(index);
    });
});

// Close the lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside of it
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Add click event listener to the "Next" button
nextBtn.addEventListener('click', nextImage);