const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Add shadow when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove shadow at the top
    }
});
