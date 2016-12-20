(function() {
    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === "back") {
            var page = document.getElementsByClassName('ui-page-active')[0],
                pageid = page ? page.id : "";
            if (pageid === "main") {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            } else {
                window.history.back();
            }
        }
    });
}());


var TEXT_START = "Start";
var TEXT_PAUSE = "Pause";
var SEC = 25*60;
var timer;

var timerStartBtn;
var resetBtn

var timeSec;
var timeMin;
var timeHour;

function init() {
    console.log("init() called");

    timerStartBtn = document.getElementById('timer-start-btn');
    resetBtn = document.getElementById('btn-reset');

    timeSec = document.getElementById('text-main-second');
    timeMin = document.getElementById('text-main-minute');
    timeHour = document.getElementById('text-main-hour');


    timerStartBtn.addEventListener("click", onTimerStartBtnClick);
    resetBtn.addEventListener("click", resetTimer);
}

function onTimerStartBtnClick() {
    console.log("onTimerStartBtnClick() called");
    if (timerStartBtn.innerHTML === TEXT_START) {
        console.log("info on button = start");
        startTimer();
    } else {
        console.log("info on button = pause");
        stopTimer();
    }
}

function startTimer() {
    console.log("startTimer() called");
    timerStartBtn.innerHTML = TEXT_PAUSE;
    timer = setInterval(timerCount, 1000);
}

function stopTimer() {
    console.log("stopTimer() called");
    timerStartBtn.innerHTML = TEXT_START;
    clearInterval(timer);
}

function resetTimer() {
    console.log("resetTimer() called");
    timeSec.innerHTML = "00";
    timeMin.innerHTML = "25";
    timeHour.innerHTML = "00";
    SEC = 25*60;
}

function timerCount() {
    SEC = SEC - 1;

    timeFormatter(SEC);
}

function timeFormatter(_SEC) {
    var totalSecond = _SEC
    console.log("totalSecond" + totalSecond.toString());
    var sec = totalSecond % 60;
    console.log("sec" + sec.toString());
    var min = Math.floor(((totalSecond - sec) / 60) % 60);
    console.log("min" + min.toString());
    var hour = (totalSecond - sec - 60 * min) / (3600);
    console.log("hour" + hour.toString());

    timeSec.innerHTML = (sec < 10) ? "0" + sec.toString() : sec.toString();
    timeMin.innerHTML = (min < 10) ? "0" + min.toString() : min.toString();
    timeHour.innerHTML = (hour < 10) ? "0" + hour.toString() : hour.toString();
}