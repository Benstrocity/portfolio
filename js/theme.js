/*
    This JavaScript file creates a button on the website that allows a user to destroy the website.
    
    Created by: Ben Youngblood on 12/12/2018
*/

/* Declaring variables */
const body = document.querySelector('body');
const mainWrapper = document.querySelector('#mainWrapper');
const navMenu = document.querySelector('#mainNav');
const profImg = document.querySelector('#profileImage');
const footer = document.querySelector('#mainFooter');
const destruct = document.querySelector('#destruct');
const initDestruct = `<button id='initDestruct'>Destroy Website</button>`; //Creates the button
destruct.innerHTML = initDestruct;
const destructButton = document.querySelector('#initDestruct');


/* This function will destroy the website */
const newDestroy = () => {
    /* Begin conditionals */

    /* End conditionals */
}

/* This event handler initializes the websites destruction */
themeButton.addEventListener('click', () => {
    /* Call newDestroy function */
    newDestroy();
});