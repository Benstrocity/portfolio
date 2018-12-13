/*
    This JavaScript file utilizes Ajax to call on another directories to change the contents of the index page for faster page load times.
    
    Created by: Ben Youngblood on 12/13/2018
*/

/* Declaring variables */
const homeNav = document.querySelector('.homeLi');
const aboutNav = document.querySelector('.aboutLi');
const skillsNav = document.querySelector('.skillsLi');
const portNav = document.querySelector('.portLi');

//Home content (broken currently)
/*homeNav.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            body.innerHTML = this.responseText;
        }
    };
    xhr.open('GET', 'index.html', true);
    xhr.send();
});*/

/* Uses Ajax to pull html from other pages without leaving the index page*/

//About content
aboutNav.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mainWrapper.innerHTML = this.responseText;
        }
    };
    xhr.open('GET', 'about.html', true);
    xhr.send();
});

//Skills content
skillsNav.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mainWrapper.innerHTML = this.responseText;
        }
    };
    xhr.open('GET', 'skills.html', true);
    xhr.send();
});

//Portfolio content
portNav.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mainWrapper.innerHTML = this.responseText;
        }
    };
    xhr.open('GET', 'portfolio.html', true);
    xhr.send();
});