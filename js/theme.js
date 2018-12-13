/*
    This JavaScript file creates a button on the website that allows a user to change the theme to a random preset theme.
    
    Created by: Ben Youngblood on 12/12/2018
*/

/* Declaring variables */
const body = document.querySelector('body');
const mainWrapper = document.querySelector('#mainWrapper');
const navMenu = document.querySelector('#mainNav');
const profImg = document.querySelector('#profileImage');
const footer = document.querySelector('#mainFooter');
const initColorChange = `<button id='initColorChange'>Change Theme</button>`; //Creates the button
colorChanger.innerHTML = initColorChange;
const themeButton = document.querySelector('#initColorChange');


/* This function sets a random website theme */
const newTheme = () => {
    let rand = Math.floor(Math.random() * 2); //Randomize number
    /* Begin conditionals */
    /* Theme 1 */
    if (rand === 0) {
        body.style.backgroundColor = 'black';
        mainWrapper.style.color = 'white';
        mainNav.style.backgroundColor = 'white';
        mainNav.style.boxShadow = '2px 0 10px #fff';
        mainNav.style.color = 'black';
        profImg.style.backgroundColor = 'white';
        profImg.style.boxShadow = '2px 0 10px #fff';
        themeButton.style.backgroundColor = 'white';
        themeButton.style.color = 'black';
        mainFooter.style.backgroundColor = 'white';
        mainFooter.style.color = 'black';
    /* Theme 2 */    
    } else {
        body.style.backgroundColor = 'lightgray';
        mainWrapper.style.color = 'brown';
        mainNav.style.backgroundColor = 'white';
        mainNav.style.boxShadow = '2px 0 10px brown';
        mainNav.style.color = 'brown';
        profImg.style.backgroundColor = 'lightgray';
        profImg.style.boxShadow = '2px 0 10px brown';
        themeButton.style.backgroundColor = 'brown';
        themeButton.style.color = 'lightgray';
        mainFooter.style.backgroundColor = 'brown';
        mainFooter.style.color = 'lightgray';
    }
    /* End conditionals */
}

/* This event handler returns a random theme from the newTheme function */
themeButton.addEventListener('click', () => {
    /* Call newTheme function */
    newTheme();
});