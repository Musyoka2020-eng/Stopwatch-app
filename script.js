const timerEl = document.getElementById('timer')

const startButtonEl = document.getElementById('start')

const stopButtonEl = document.getElementById('stop')

const resetButtonEl = document.getElementById('reset')

let startTime = 0
let elepsedTime = 0
let timerInterval

stopButtonEl.disabled = true;
resetButtonEl.disabled = true;

/**
 * Starts the timer.
 */
function startTimer() {
    startTime = Date.now() - elepsedTime;
    timerInterval = setInterval(() => {
        elepsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elepsedTime);
    }, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
    resetButtonEl.disabled = false;
}

/**
 * Formats the given time in milliseconds into a human-readable format.
 * 
 * @param {number} time - The time in milliseconds to format.
 * @returns {string} The formatted time string.
 */
function formatTime(time) { 
    const miliseconds =Math.floor(( time % 1000) / 10);
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(time / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : "0"  + hours): "00")
        +":"+
        (minutes ? (minutes > 9 ? minutes : "0"  + minutes): "00")
        +":"+
        (seconds ? (seconds > 9 ? seconds : "0"  + seconds): "00")
        +":"+
        (miliseconds > 9 ? miliseconds : "0" + miliseconds)
    )
}
/**
 * Stops the timer.
 */
function stopTimer() {
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
    resetButtonEl.disabled = false;
}

/**
 * Resets the timer.
 */
function resetTimer() {
    clearInterval(timerInterval);
    elepsedTime = 0;
    timerEl.textContent = "00:00:00";
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
    resetButtonEl.disabled = true;
}

startButtonEl.addEventListener('click', startTimer)
stopButtonEl.addEventListener('click', stopTimer)
resetButtonEl.addEventListener('click', resetTimer)