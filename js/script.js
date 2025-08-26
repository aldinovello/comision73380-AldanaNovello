document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuHamburguesa.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
});
