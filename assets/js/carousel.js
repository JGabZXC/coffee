document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const navLinks = document.querySelectorAll('.carousel-nav a');
    let index = 0;

    const moveCarousel = () => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        updateCarousel();
    };

    const updateCarousel = () => {
        carousel.scrollTo({
            left: index * carousel.clientWidth,
            behavior: 'smooth'
        });
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };

    navLinks.forEach((link, idx) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            index = idx;
            updateCarousel();
        });
    });

    setInterval(moveCarousel, 5000);
    updateCarousel();
});