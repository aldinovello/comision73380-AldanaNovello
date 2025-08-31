document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.nav-links');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});