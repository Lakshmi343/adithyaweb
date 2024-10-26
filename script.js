 // Show footer animation when scrolling down
 window.addEventListener('scroll', function () {
    const footer = document.querySelector('.footer');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    // Show footer when scrolled to the bottom
    if (scrollY + windowHeight >= documentHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});

// Show footer animation on page refresh
window.addEventListener('load', function () {
    const footer = document.querySelector('.footer');
    footer.classList.add('visible');
});