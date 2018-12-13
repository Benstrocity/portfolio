/*
    This JavaScript file creates a button on the website that allows a user to change the theme to a random preset theme.
    
    Created by: Ben Youngblood on 12/12/2018
*/

/* Declaring variables */
const body = document.querySelector('body');
const mainWrapper = document.querySelector('#mainWrapper');
const navMenu = document.querySelector('#mainNav');
const profImg = document.querySelector('#profileImage');
const colorChanger = document.querySelector('#colorChanger');
const initColorChange = `<button id='initColorChange'>Change Theme</button>`; //Creates the button
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
    /* Begin conditionals */
    /* Theme 1 */
    if (rand === 0) {
        bodyBG = body.style.backgroundColor = 'black';
        fontColor = mainWrapper.style.color = 'white';
        navBG = mainNav.style.backgroundColor = 'white';
        navBG = mainNav.style.boxShadow = '2px 0 10px #fff';
        navFont = mainNav.style.color = 'black';
        imageBG = profImg.style.backgroundColor = 'white';
        imageBG = profImg.style.boxShadow = '2px 0 10px #fff';
        buttonColor = themeButton.style.backgroundColor = 'white';
        buttonFont = themeButton.style.color = 'black';
    /* Theme 2 */    
    } else {
        bodyBG = body.style.backgroundColor = 'lightgray';
        fontColor = mainWrapper.style.color = 'brown';
        navBG = mainNav.style.backgroundColor = 'white';
        navBG = mainNav.style.boxShadow = '2px 0 10px brown';
        navFont = mainNav.style.color = 'brown';
        imageBG = profImg.style.backgroundColor = 'lightgray';
        imageBG = profImg.style.boxShadow = '2px 0 10px brown';
        buttonColor = themeButton.style.backgroundColor = 'lightgray';
        buttonFont = themeButton.style.color = 'brown';
    }
    /* End conditionals */
}

/* This event handler returns a random theme from the newTheme function */
themeButton.addEventListener('click', () => {
    /* Call newTheme function */
    newTheme();
});