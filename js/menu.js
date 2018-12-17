const siteLogo = document.querySelector('.logoLi');
const toggleMenu = document.querySelector('#toggle');
const toggleItems = document.querySelector('#toggleItems');
toggleMenu.className = 'closed';
toggleMenu.innerHTML = `<img src='img/toggleOff.png' alt='Menu toggled off'>`;

const toggleOn = () => {
    toggleMenu.innerHTML = `<img src='img/toggleOn.png' alt='Menu toggled off'>`;
        toggleItems.style.display = 'flex';
        toggleItems.style.animation = 'slideFromRight 2s';
        siteLogo.style.animation = 'fadeOut 2s';
        siteLogo.style.display = 'none';
        toggleMenu.style.animation = 'slideFromRight 2s';
        toggleMenu.className.replace(/\bclosed\b/, '');
        toggleMenu.className = 'open';
}
const toggleOff = () => {
    toggleMenu.innerHTML = `<img src='img/toggleOff.png' alt='Menu toggled off'>`;
        toggleItems.style.display = 'none';
        toggleItems.style.animation = 'slideFromLeft 2s';
        siteLogo.style.animation = 'fadeIn2 2s';
        siteLogo.style.display = 'inline';
        toggleMenu.style.animation = 'slideFromLeft 2s';
        toggleMenu.className.replace(/\bopen\b/, '');
        toggleMenu.className = 'closed';
}

toggleMenu.addEventListener('click', () => {
    if (toggleMenu.className.includes('closed')) {
        console.log('success');
        toggleOn();
    } else {
        toggleOff();
    }
});