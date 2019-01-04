/*
    This JavaScript file adds additional behavior to the navigation menu for mobile devices
    
    Created by: Ben Youngblood on 12/10/2018
*/

/**** 
  --- Declaring variables ---
****/

const html = document.querySelector("html");
const siteLogo = document.querySelector(".logoLi");
const toggleMenu = document.querySelector("#toggle");
const toggleItems = document.querySelector("#toggleItems");
toggleMenu.className = "closed";
toggleMenu.innerHTML = `<img src='img/toggleOff.png' alt='Menu toggled off'>`;

/**** 
    --- Build functions ---
****/

const toggleOn = () => {
  toggleMenu.innerHTML = `<img src='img/toggleOn.png' alt='Menu toggled off'>`;
  toggleItems.style.display = "flex";
  toggleItems.style.animation = "slideFromRight 2s";
  siteLogo.style.animation = "fadeOut 2s";
  siteLogo.style.display = "none";
  toggleMenu.style.animation = "slideFromRight 2s";
  toggleMenu.className.replace(/\bclosed\b/, "");
  toggleMenu.className = "open";
};
const toggleOff = () => {
  toggleMenu.innerHTML = `<img src='img/toggleOff.png' alt='Menu toggled off'>`;
  toggleItems.style.display = "none";
  toggleItems.style.animation = "slideFromLeft 2s";
  siteLogo.style.animation = "fadeIn2 2s";
  siteLogo.style.display = "inline";
  toggleMenu.style.animation = "slideFromLeft 2s";
  toggleMenu.className.replace(/\bopen\b/, "");
  toggleMenu.className = "closed";
};

/****
    --- Build event listeners ---
****/

// Calls toggleOn and toggleOff functions when clicking on menu toggle icons
toggleMenu.addEventListener("click", () => {
  if (toggleMenu.className.includes("closed")) {
    toggleOn();
  } else {
    toggleOff();
  }
});

// Load these layout styles based on screen size on first load
window.addEventListener("load", () => {
  if (html.clientWidth > 750) {
    toggleOn();
    siteLogo.style.display = "inline";
    siteLogo.style.animation = "none";
    siteLogo.style.marginLeft = "15px";
    toggleItems.style.display = "flex";
    toggleMenu.style.display = "none";
  } else {
    toggleOff();
    toggleItems.style.display = "none";
    toggleMenu.style.display = "block";
    toggleMenu.style.position = "absolute";
    toggleMenu.style.right = "15px";
  }
});

// Load these layout styles based on screen size on resize
window.addEventListener("resize", () => {
  if (html.clientWidth > 750) {
    toggleOn();
    siteLogo.style.display = "inline";
    siteLogo.style.animation = "fadeIn 1s";
    siteLogo.style.marginLeft = "15px";
    toggleItems.style.display = "flex";
    toggleMenu.style.display = "none";
  } else {
    toggleOff();
    toggleItems.style.display = "none";
    toggleMenu.style.display = "inline";
    toggleMenu.style.position = "absolute";
    toggleMenu.style.right = "15px";
  }
});
