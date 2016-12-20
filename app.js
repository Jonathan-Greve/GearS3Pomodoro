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
var TEXT_STOP = "Stop";
var SEC;
var MIN;
var HOUR;

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
    if (timerStartBtn.innerHTML === TEXT_START){
    	console.log("info on button = start");
    	startTimer();
    } else {
    	console.log("info on button = stop");
    	stopTimer();
    }
}

function startTimer() {
	console.log("startTimer() called");
	timerStartBtn.innerHTML = TEXT_STOP;
	timeSec.innerHTML = "59";
	timeMin.innerHTML = "24";
	timeHour.innerHTML = "00";
}

function stopTimer() {
	console.log("stopTimer() called");
	timerStartBtn.innerHTML = TEXT_START;
}

function resetTimer(){
	console.log("resetTimer() called");
	timeSec.innerHTML = "00";
	timeMin.innerHTML = "25";
	timeHour.innerHTML = "00";
}




