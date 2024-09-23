
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
const stopBtn = document.querySelector('#stop-btn');



let count = 10;
let started = false;
let timer;  // Using the 'let' variable like this makes it accessible to all functions below

function resetTimer() {
    clearInterval(timer);
    timerDisplay.innerText = 'Time: 10';
    count = 10;
    started = false;
}

function startTimer() {
    if (!started) {
        timer = setInterval(function (){    // This setInterval REPEATS the interval
            count--;     // This tells the count to decrease by one
            timerDisplay.innerText = 'Time: ' + count;
            // console.log(count); // This displays the count number in the console
        
            if (count <= 0){    // This if conditional statement tell the timer to stop once the count gets <= 0
                clearInterval(timer);
            }
        }, 1000);

        started = true;
    }
}

function getKeyPress(eventObject) {
    // If the keyCode is 83, run startTimer()
    if (eventObject.keyCode === 83) {
        startTimer();
    }

    // If the keyCode is ?, run resetTimer
    if (eventObject.keyCode === 82) {
        resetTimer();
    }
}


timerBtn.addEventListener('click', startTimer);

resetBtn.addEventListener('click', resetTimer);

document.addEventListener('keydown', getKeyPress);

// const data = {
//     name: 'Matt'
// }

// console.log(data.name); // Showing how you access the 'value' of the 'property-value' pair, within the object