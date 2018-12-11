const body = document.querySelector('body');
const mainWrapper = document.querySelector('#mainWrapper');
const navMenu = document.querySelector('#mainNav');
const profImg = document.querySelector('#profileImage');
const colorChanger = document.querySelector('#colorChanger');
const initColorChange = `<button id='initColorChange'>Change Theme</button>`;
colorChanger.innerHTML = initColorChange;
const themeButton = document.querySelector('#initColorChange');

const changeTheme = () => {
    let randIndex = Math.floor(Math.random() * 2);
    const themeArr = [
            {
                bodyBG: body.style.backgroundColor = 'black',
                fontColor: mainWrapper.style.color = 'white',
                navBG: mainNav.style.backgroundColor = 'white',
                navFont: mainNav.style.color = 'black',
                imageBG: profImg.style.backgroundColor = 'white',
                buttonColor: themeButton.style.backgroundColor = 'white',
                buttonFont: themeButton.style.color = 'black'
            },   
            {    
                bodyBG: body.style.backgroundColor = 'lightgray',
                fontColor: mainWrapper.style.color = 'brown',
                navBG: mainNav.style.backgroundColor = 'lightgray',
                navFont: mainNav.style.color = 'brown',
                imageBG: profImg.style.backgroundColor = 'lightgray',
                buttonColor: themeButton.style.backgroundColor = 'lightgray',
                buttonFont: themeButton.style.color = 'brown'
            }
        ];
    return themeArr[0];
}

themeButton.addEventListener('click', () => {
    changeTheme();
})