const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');


let intervalID;
let timerTime = 00;
function startTimer(){
intervalID = setInterval(incrementTimer,1000);
}

function stopTimer(){
    clearInterval(intervalID);
    
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    secs.innerText = '00';
}

function incrementTimer(){
    timerTime++;
    const numberOfMins =Math.floor(timerTime/60);
    const numberOfSecs = timerTime % 60;
    secs.innerText = timerTime;
    mins.innerText = numberOfMins;
    console.log('incrementTimer', timerTime);
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);