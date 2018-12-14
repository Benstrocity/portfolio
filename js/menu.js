const toggleMenu = document.querySelector('#mainNav span');
const navUL = document.querySelector('#mainNav ul');

toggleMenu.addEventListener('click', () => {
    navUL.style.display = 'flex';
    navUL.style.animation = 'slideFromRight 1s';
    toggleMenu.style.display = 'none';
});