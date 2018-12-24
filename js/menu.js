const html = document.querySelector('html');
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
        toggleOn();
    } else {
        toggleOff();
    }
});

//Layout that loads based on screen size on first load
window.addEventListener('load', () => {
    if (html.clientWidth > 750) {
        toggleOn();
        siteLogo.style.display = 'inline';
        siteLogo.style.animation = 'none';
        siteLogo.style.marginLeft = '15px';
        toggleItems.style.display = 'flex';
        toggleMenu.style.display = 'none';
    } else {
        toggleOff()
        toggleMenu.style.display = 'inline';
    }
});
//Layout that loads based on screen size on resize
window.addEventListener('resize', () => {
    if (html.clientWidth > 750) {
        toggleOn();
        siteLogo.style.display = 'inline';
        siteLogo.style.animation = 'fadeIn 1s';
        siteLogo.style.marginLeft = '15px';
        toggleItems.style.display = 'flex';
        toggleMenu.style.display = 'none';
    } else {
        toggleOff();
        toggleMenu.style.display = 'inline';
    }
});

const homeLi = document.querySelector('.homeLi img');
const aboutLi = document.querySelector('.aboutLi img');
const skillsLi = document.querySelector('.skillsLi img');
const portLi = document.querySelector('.portLi img');
const homeHov = document.querySelector('#homeHov');
const aboutHov = document.querySelector('#aboutHov');
const skillsHov = document.querySelector('#skillsHov');
const portHov = document.querySelector('#portHov');
const navArr = [homeLi, aboutLi, skillsLi, portLi];
const hovArr = [homeHov, aboutHov, skillsHov, portHov];

for ( let i = 0; i < navArr.length; i++ ) {
    if (html.clientWidth > 550) {
        navArr[i].addEventListener('mouseenter', () => {
            navArr[i].style.display = 'none';
            hovArr[i].style.display = 'inline';

            hovArr[i].addEventListener('mouseleave', () => {
                hovArr[i].style.display = 'none';
                navArr[i].style.display = 'inline';
            });
        });
    }
}