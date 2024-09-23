const header = document.querySelector('h1'); // example of calling the CSS Selector via the h1 element
const paragraph = document.querySelector('.special-paragraph'); // example of calling the CSS Selector via a class of an element
const image = document.querySelector('#main-image'); // example of calling the CSS Selector via a id of an element
const noteOutput = document.querySelector('.output');
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
const stopBtn = document.querySelector('#stop-btn');


console.log(header.innerText);


console.log(paragraph.innerText);

header.classList.add('crazy'); // In this example, you've defined the variable 'header' above, and are selecting 'h1' in the parentheses. You are adding the class 'crazy' to the h1 element. If you look at the CSS file, we have defined the class of 'crazy', with it's own styling. You are applying the 'crazy' styling to the 'h1' element via JavaScript

header.style.textDecoration = 'underline';

console.log(document.children[0].children[1].children[0]);  // Traversal: digging down into an element

// image.setAttribute('src', 'https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg');

// Inserting a new article element into the output section
noteOutput.insertAdjacentHTML('beforeend', `
    <article>
        <h3>new note text</h3>
        <p>Added On: 9/20/2024</p>
    </article>
`); // Note that tat in order to do a 'Template Literal' (i.e writing the HTML you want to insert in the HTML doc format), you DO NOT USE quotations ('' or ""), you have to use the 'backtick' (`) which is the same key on the keyboard as the tilda (~) or next to the number 1


// Timers
// setTimeout(function() {         // This is referred to as a 'callback funtion'
//     console.log('time up!');
// }, 3000);                       // The time is set in milliseconds

let count = 10;
let started = false;
let timer;



timerBtn.addEventListener('click', function() {
    if (!started) {
        const timer = setInterval(function (){    // This setInterval REPEATS the interval
            count--;     // This tells the count to decrease by one
            timerDisplay.innerText = 'Time: ' + count;
            // console.log(count); // This displays the count number in the console
        
            if (count <= 0){    // This if conditional statement tell the timer to stop once the count gets <= 0
                clearInterval(timer);
                timerDisplay.innerText = 'Time is Up!';
                timerDisplay.innerText = 'Time: 10';
                count = 10;
                started = false;
            }
        }, 1000);

        started = true;
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(timer);
    timerDisplay.innerText = 'Time: 10';
    count = 10;
    started = false;
});


stopBtn.addEventListener('click', function() {
    clearInterval(timer);
    started = false;
});