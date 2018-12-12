/* Declaring variables */
const body = document.querySelector('body');
const mainWrapper = document.querySelector('#mainWrapper');
const navMenu = document.querySelector('#mainNav');
const profImg = document.querySelector('#profileImage');
const colorChanger = document.querySelector('#colorChanger');
const initColorChange = `<button id='initColorChange'>Change Theme</button>`;
colorChanger.innerHTML = initColorChange;
const themeButton = document.querySelector('#initColorChange');

/* This function sets a random website theme */
const newTheme = () => {
    let rand = Math.floor(Math.random() * 2); //Randomize number
    let bodyBG;
    let fontColor;
    let navBG;
    let navFont;
    let imageBG;
    let buttonColor;
    let buttonFont;
    if (rand === 0) { //Theme 1
        bodyBG = body.style.backgroundColor = 'black';
        fontColor = mainWrapper.style.color = 'white';
        navBG = mainNav.style.backgroundColor = 'white';
        navFont = mainNav.style.color = 'black';
        imageBG = profImg.style.backgroundColor = 'white';
        buttonColor = themeButton.style.backgroundColor = 'white';
        buttonFont = themeButton.style.color = 'black';
    } else { //Theme 2
        bodyBG = body.style.backgroundColor = 'lightgray';
        fontColor = mainWrapper.style.color = 'brown';
        navBG = mainNav.style.backgroundColor = 'white';
        navFont = mainNav.style.color = 'brown';
        imageBG = profImg.style.backgroundColor = 'lightgray';
        buttonColor = themeButton.style.backgroundColor = 'lightgray';
        buttonFont = themeButton.style.color = 'brown';
    }
}

/* This event handler returns a random theme from the newTheme function */
themeButton.addEventListener('click', () => {
    newTheme();
});