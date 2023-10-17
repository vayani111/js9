let timerCountdown;
let timerTimeLeft = 0;

function startTimer() {
    clearInterval(timerCountdown);
    updateTimerDisplay();

    timerCountdown = setInterval(() => {
        timerTimeLeft--;
        if (timerTimeLeft <= 0) {
            clearInterval(timerCountdown);
            timerTimeLeft = 0;
        }
        updateTimerDisplay();
    }, 1000);
}

function setTime(seconds) {
    timerTimeLeft = seconds;
    startTimer();
}

function updateTimerDisplay() {
    const hours = String(Math.floor(timerTimeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timerTimeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timerTimeLeft % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
}

function resetTimer() {
    clearInterval(timerCountdown);
    timerTimeLeft = 0;
    updateTimerDisplay();
}

let stopwatchCountdown;
let stopwatchTime = 0;

function startStopwatch() {
    if (document.getElementById("startStopwatchButton").textContent === "Start") {
        document.getElementById("startStopwatchButton").textContent = "Pause";
        stopwatchCountdown = setInterval(() => {
            stopwatchTime += 10;
            updateStopwatchDisplay();
        }, 10);
    } else {
        clearInterval(stopwatchCountdown);
        document.getElementById("startStopwatchButton").textContent = "Resume";
    }
}

function resetStopwatch() {
    clearInterval(stopwatchCountdown);
    document.getElementById("startStopwatchButton").textContent = "Start";
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hours = String(Math.floor(stopwatchTime / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((stopwatchTime % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(stopwatchTime % 1000).padStart(3, '0');
    document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}




