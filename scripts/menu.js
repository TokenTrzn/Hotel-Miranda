const menuIcon = document.querySelector('.header__menu__icon')
const closeMenuIcon = document.querySelector('.header__menu__close-icon')
const navMenu = document.querySelector('.header__nav')

function toggleMenu() {
    navMenu.classList.toggle('hidden')
    menuIcon.classList.toggle('hidden')
    closeMenuIcon.classList.toggle('hidden')
}

menuIcon.addEventListener('click', toggleMenu)
closeMenuIcon.addEventListener('click', toggleMenu)