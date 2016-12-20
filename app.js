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

var timeInfo;
var timerStartBtn;

function init() {
    console.log("init() called");
    alert("Ning v2.34");

    timerStartBtn = document.getElementById('timer-start-btn');
    timeInfo = document.getElementById('time-info');


    timerStartBtn.addEventListener("click", onTimerStartBtnClick);
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
	timeInfo.innerHTML = "24:59";
	timerStartBtn.innerHTML = TEXT_STOP;
}

function stopTimer() {
	console.log("stopTimer() called");
	timeInfo.innerHTML = "25:00";
	timerStartBtn.innerHTML = TEXT_START;
}



