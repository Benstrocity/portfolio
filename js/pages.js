/*
    This JavaScript file utilizes Ajax to call on another directories to change the contents of the index page for faster page load times.
    
    Created by: Ben Youngblood on 12/13/2018
*/

/* Declaring variables */
const logoNav = document.querySelector('.logoLi');
const homeNav = document.querySelector('.homeLi');
const aboutNav = document.querySelector('.aboutLi');
const skillsNav = document.querySelector('.skillsLi');
const portNav = document.querySelector('.portLi');

//Home content
logoNav.addEventListener('click', () => {
    profImg.style.display = 'none';
    mainWrapper.innerHTML = `
        <heading id='pageHeading'>
            <h1>Ben.<br>making tomorrow brighter.</h1>
        </heading>

        <div id='pageContent'>
            <h3>Hi,</h3>
            <p>Welcome to my portfolio website. Have a look around and reach out to me with any questions. Thank you for stopping by!</p>
        </div>
        
        <div id='profileImage'>
            <img id='profile' src='img/profile.jpg' alt='Image of Ben'>
            <ul>
                <li id='husbandLi'>
                    <span><img id='husbandImg' src='img/husband.png' alt='Husband image'></span>
                    Husband
                </li>
                <li>
                    <span><img id='friendImg' src='img/friends.png' alt='Friend image'></span>
                    Friend
                </li>
                <li>
                    <span><img id='devImg' src='img/developer.png' alt='Developer image'></span>
                    Developer
                </li>
            </ul>
        </div>
        `;
    if (html.clientWidth < 750) {
        toggleOff();
    }
});

homeNav.addEventListener('click', () => {
    profImg.style.display = 'none';
    mainWrapper.innerHTML = `
        <heading id='pageHeading'>
            <h1>Ben.<br>making tomorrow brighter.</h1>
        </heading>

        <div id='pageContent'>
            <h3>Hi,</h3>
            <p>Welcome to my portfolio website. Have a look around and reach out to me with any questions. Thank you for stopping by!</p>
        </div>
        
        <div id='profileImage'>
            <img id='profile' src='img/profile.jpg' alt='Image of Ben'>
            <ul>
                <li id='husbandLi'>
                    <span><img id='husbandImg' src='img/husband.png' alt='Husband image'></span>
                    Husband
                </li>
                <li>
                    <span><img id='friendImg' src='img/friends.png' alt='Friend image'></span>
                    Friend
                </li>
                <li>
                    <span><img id='devImg' src='img/developer.png' alt='Developer image'></span>
                    Developer
                </li>
            </ul>
        </div>
        `;
    if (html.clientWidth < 750) {
        toggleOff();
    }
});

/* Uses Ajax to pull html from other pages without leaving the index page*/

//About content
aboutNav.addEventListener('click', () => {
    profImg.style.display = 'none';
    mainWrapper.innerHTML = `
        <heading id='pageHeading'>
            <h2>about me.</h2>
         /heading>

        <div id='pageContent'>
            <p id='aboutP'><span>It</span> started with a big dream and a desire to create a fulfilling life for myself and my family.</p>
            <ul id='dates'>
                <li id='date1'>
                <span>May 2016</span>
                    <p>
                    - I graduated from college and took a position as an intern Web Developer for a local design agency.
                    </p>
                </li>
                <li id='date2'>
                    <span>August 2016</span>
                    <p>
                    - I began working at a software development company on the support desk. This was a way to get my foot int he door of programming.
                    </p>
                </li>
                <li id='date3'>
                <span>April 2017</span>
                <p>
                    - I took a position with an IT managed service provider as a Systems Administrator.
                </p>
                </li>
                <li id='date4'>
                    <span>August 2017</span>
                    <p>
                    - I took a promotion to a Network Engineer role.
                    </p>
                </li>
                <li id='date5'>
                    <span>September 2018</span>
                    <p>
                    - Begin studying and learning how to program with JavaScript.
                    </p>
                </li>
                <li id='date6'>
                <span>August 2018</span>
                    <p>
                    - Fast forward one year; I decided to moved back to my Systems Administrator role to give me more time to focus on programming.
                    </p>
                </li>
            </ul>
        </div>
        `;
    if (html.clientWidth < 750) {
        toggleOff();
    }
});

//Skills content
skillsNav.addEventListener('click', () => {
    profImg.style.display = 'none';
    mainWrapper.innerHTML = `
        <heading id='pageHeading'>
            <h2>skills.</h2>
        </heading>

        <div id='pageContent'>
            <h3>HTML and CSS</h3>
            <p>Most of my experience is with front end development. The three areas I work in the most are HTML, CSS, and
            JavaScript. I have several apps I have built utilizing these three languages. I have started to work towards
            utilizing more JavaScript and JavaScript based frameworks and libraries.</p>
        </div>
         
        <div id='skillIcons'>
            <img src='img/html.png' alt='HTML Symbol'/>
            <img src='img/css.png' alt='HTML Symbol'/>
            <img src='img/js.png' alt='HTML Symbol'/>
        </div>
        `;
    if (html.clientWidth < 750) {
        toggleOff();
    }
});

//Portfolio content
portNav.addEventListener('click', () => {
    profImg.style.display = 'none';
    mainWrapper.innerHTML = `
        <heading id='pageHeading'>
            <h2>portfolio.</h2>
        </heading>

        <div id='pageContent' class='portImages'>
            <img id='va' src='img/virtualassistant.png' alt='Virtual Assistant App'/>
            <img id='dw' src='img/dowhat.png' alt='DoWhat App'/>
            <img id='st' src='img/slayertap.png' alt='Slayer Tap App'/>
        </div>
        `;
    if (html.clientWidth < 750) {
        toggleOff();
    }
});