const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
}

function updateDisplay() {
    const elapsed = Date.now() - startTime;
    elapsedTime = elapsed;
    const formattedTime = new Date(elapsed).toISOString().substr(11, 8);
    display.textContent = formattedTime;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
