/* document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.mobile-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}); */

document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuHamburguesa.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});