/*
    This JavaScript file utilizes Ajax to call on another directories to change the contents of the index page for faster page load times.
    
    Created by: Ben Youngblood on 12/13/2018
*/

/* Declaring variables */
const logoNav = document.querySelector('.logoLi');
const homeNav = document.querySelector('.homeX');
const aboutNav = document.querySelector('.aboutX');
const skillsNav = document.querySelector('.skillsX');
const portNav = document.querySelector('.portX');

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
         </heading>

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
            <img id='html' src='img/html.png' alt='HTML5 Symbol'/>
            <img id='css' src='img/css.png' alt='CSS3 Symbol'/>
            <img id='js' src='img/js.png' alt='JavaScript Symbol'/>
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

        <div class='portProj virtualAssistant'>
            <div class='projImg'>
                <img id='va' src='img/virtualassistant.png' alt='Virtual Assistant App'/>
            </div>

            <div class='projContent'>
                <h2>Virtual Assistant</h2>
                <p><span>The Reason: </span>This application was built to practice and showcase skills in JavaScript.
                This app allowed me to create something that relied entirely on user interaction.</p>
                <p><span>The Lesson: </span>I learned a great deal about creating something that could be customized by 
                the user. I learned that user experience is something that can be difficult to maintain while still trying to do something 
                unique.</p>
                <p><span>The Success: </span>This app is easy to understand and the interface is clean and familiar. The 
                user has control over the color pallet and is free to interact with the virtual assistant in any way they wish. 

            </div>
        </div>
        <hr>
        <div class='portProj doWhat'>
            <div class='projImg'>
                <img id='dw' src='img/dowhat.png' alt='DoWhat App'/>
            </div>
            
            <div class='projContent'>
                <h2>DoWhat</h2>
                <p><span>The Reason: </span>This is the first web application I built. It's a simple application that 
                allows for a bit of fun user interaction. I wanted to create an engaging application even though I did 
                not have as much experience at the time with JavaScript and DOM manipulation.
                <p><span>The Lesson: </span>I learned a great deal about conditional statements by creating this app. It
                also allowed me to understand the basics of UX.</p>
                <p><span>The Success: </span>This app functions really well and gives users an action to take. It successfully 
                goes beyond an open it and close it app; it challenges the user to do something outside of the app without leading 
                them away from the idea of the app.</p>
            </div>
        </div>
        <hr>
        <div class='portProj slayerTap'>
            <div class='projImg'>    
                <img id='st' src='img/slayertap.png' alt='Slayer Tap App'/>
            </div>
        
            <div class='projContent'>
                <h2>Slayer Tap</h2>
                <p><span>The Reason: </span>I wanted to do something that involved more variables and more functions. Slayer Tap dives
                heavily into UI and UX by giving users a larger deal of functionality. This also allowed me to grow my knowledge in 
                photoshop design, more complex functions, and larger conditionals.
                <p><span>The Lesson: </span>The layout was very difficult to manipulate due to lack of focus on UI first. My goal 
                going into this was functionality first and UI second. I no longer think this way; the layout and design heading 
                the development makes for an easier time in the polishing phase and programming phase of the app.
                <p><span>The Success: </span></p>The app style came out nicely and it functions exactly how I envisoned it 
                when I was drawing the idea out on my whiteboard. This was also a lot of fun to create and really helped me to solidify
                my passion for design and fun UX.
            </div>
        </div>
        `;
    if (html.clientWidth < 750) {
        toggleOff();
    }
});