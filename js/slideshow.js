const images = document.querySelectorAll('.tab-image');
const tabImagesContainer = document.querySelector('.tab-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateImages() {
    const offset = -currentIndex * (100 / 2); // Adjust based on number of images in view
    tabImagesContainer.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length / 2) {
        currentIndex = 0; // Reset to first set of images
    }
    updateImages();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = (images.length / 2) - 1; // Go to last image in first set
    }
    updateImages();
});
