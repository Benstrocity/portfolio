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
const initDestruct = `<button id='initDestruct'>Destroy Website</button>`; //Creates the destroy button
destruct.innerHTML = initDestruct;
const destructButton = document.querySelector('#initDestruct');

const repair = document.querySelector('#repair');
const initRepair = `<button id='initRepair'>Repair Website</button>`; //Creates the repair button
repair.innerHTML = initRepair;
const repairButton = document.querySelector('#initRepair');
repairButton.style.display = 'none';


/* This function will destroy the website */
const newDestroy = () => {
    destructButton.style.display = 'none';
    mainWrapper.style.animation = 'fadeOut 2.5s';

    window.setTimeout(() => {
        repairButton.style.display = 'block';
        repairButton.style.animation = 'fadeIn 2.5s';
        body.style.backgroundImage = "url('./img/background_dark.png')";
        body.style.backgroundColor = '#551d1d';
        mainWrapper.style.display = 'none';
        body.style.height = '1500px';
    }, 2000 );
}

const newRepair = () => {
    body.style.backgroundColor = '#00bff3';
    body.style.backgroundImage = "url('./img/background_light.png')";
    mainWrapper.style.animation = 'fadeIn 2.5s';
    mainWrapper.style.display = 'block';
    body.style.height = 'initial';
    repairButton.style.display = 'none';
    destructButton.style.display = 'block';
    destructButton.style.animation = 'fadeIn 2.5s';
}

/* This event handler initializes the websites destruction */
destructButton.addEventListener('click', () => {
    /* Call newDestroy function */
    newDestroy();
});

repairButton.addEventListener('click', () => {
    newRepair();
});