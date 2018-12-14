const siteLogo = document.querySelector('.homeLi');
const toggleMenu = document.querySelector('#toggle');
const toggleItems = document.querySelector('#toggleItems');
toggleMenu.className = 'closed';

toggleMenu.addEventListener('click', () => {
    if (toggleMenu.className.includes('closed')) {
        toggleItems.style.display = 'flex';
        toggleItems.style.animation = 'slideFromRight 2s';
        siteLogo.style.animation = 'fadeIn 2s';
        toggleMenu.style.animation = 'slideFromRight 2s';
        toggleMenu.className.replace(/\bclosed\b/, '');
        toggleMenu.className = 'open';
    } else {
        toggleItems.style.display = 'none';
        toggleItems.style.animation = 'slideFromLeft 2s';
        siteLogo.style.animation = 'fadeIn2 2s';
        toggleMenu.style.animation = 'slideFromLeft 2s';
        toggleMenu.className.replace(/\bopen\b/, '');
        toggleMenu.className = 'closed';
    }
});