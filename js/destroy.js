/*
    This JavaScript file creates a button on the website that allows a user to destroy the website.
    
    Created by: Ben Youngblood on 12/12/2018
*/

/**** 
  --- Declaring variables ---
****/

const body = document.querySelector("body");
const mainWrapper = document.querySelector("#mainWrapper");
const navMenu = document.querySelector("#mainNav");
const profImg = document.querySelector("#profileImage");
const footer = document.querySelector("#mainFooter");
const destruct = document.querySelector("#destruct");
//Creates the destroy button
const initDestruct = `<button id='initDestruct'>Destroy Website</button>`;
destruct.innerHTML = initDestruct;
const destructButton = document.querySelector("#initDestruct");
//Creates the repair button
const repair = document.querySelector("#repair");
const initRepair = `<button id='initRepair'>Repair Website</button>`;
repair.innerHTML = initRepair;
const repairButton = document.querySelector("#initRepair");
repairButton.style.display = "none";

/****
  --- Build functions ---
****/

// This function will destroy the website
const newDestroy = () => {
  destructButton.style.display = "none";
  mainWrapper.style.animation = "fadeOut 2.5s";

  // Sets 2s timeout to delay background change
  window.setTimeout(() => {
    // Change styling for different screen sizes
    if (html.clientWidth < 900) {
      repairButton.style.display = "block";
      repairButton.style.animation = "fadeIn 2.5s";
      body.style.backgroundImage = "url('./img/background_dark.png')";
      body.style.backgroundColor = "#551d1d";
      body.style.backgroundSize = "contain";
      body.style.backgroundPosition = "center 35%";
      mainWrapper.style.display = "none";
    } else if (html.clientWidth < 1300) {
      repairButton.style.display = "block";
      repairButton.style.animation = "fadeIn 2.5s";
      body.style.backgroundImage = "url('./img/background_dark.png')";
      body.style.backgroundColor = "#551d1d";
      body.style.backgroundSize = "contain";
      body.style.backgroundPosition = "center 80%";
      body.style.height = "1300px";
      mainWrapper.style.display = "none";
    } else {
      repairButton.style.display = "block";
      repairButton.style.animation = "fadeIn 2.5s";
      body.style.backgroundImage = "url('./img/background_dark.png')";
      body.style.backgroundColor = "#551d1d";
      body.style.backgroundSize = "contain";
      body.style.height = "2200px";
      mainWrapper.style.display = "none";
    }
  }, 2000);
};

// This function repairs the website and sets it back to normal
const newRepair = () => {
  body.style.backgroundColor = "#00bff3";
  body.style.backgroundImage = "url('./img/background_light.png')";
  mainWrapper.style.animation = "fadeIn 2.5s";
  mainWrapper.style.display = "block";
  body.style.height = "100%";
  body.style.backgroundSize = "cover";
  repairButton.style.display = "none";
  destructButton.style.display = "block";
  destructButton.style.animation = "fadeIn 2.5s";
};

/****
  --- Build event listeners ---
****/

// This event listener initializes the websites destruction
destructButton.addEventListener("click", () => {
  // Call newDestroy function
  newDestroy();
});

// This event listener in itializes the websites repair
repairButton.addEventListener("click", () => {
  // Call newRepair function
  newRepair();
});
