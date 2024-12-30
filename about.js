



// Scroll-triggered animation for text
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-text');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('scroll-visible');
    }
});
