
document.write('<script src="TimerModel.js" ></script>')

document.getElementById('timerButton').addEventListener('click', updateTimer);

//var startingMinutes;
//var time;
//var countdownEl;

var hours;
var minutes;
var seconds;
var input;
var interval;

function timeButtonClick()
{
     //startingMinutes = document.getElementById('countdown').value ; // change this to time inputted
     //time = startingMinutes * 60;
     if(getTimeRemainingHours() == 0 && getTimeRemainingMinutes() == 0 && getTimeRemainingSeconds() == 0)
        clearInterval(interval);
     countdownEl.value =  getTimeRemainingHours() + " :" + getTimeRemainingMinutes() + " :" + getTimeRemainingSeconds();
     
}

// function getTimeRemainingHours(){    updateTimer();    var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));    return Math.floor(timeRemainingMilli / hourInMilli);}:function getTimeRemainingMinutes(){    updateTimer();    var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));    return Math.floor((timeRemainingMilli % hourInMilli) / minuteInMilli);}:function getTimeRemainingSeconds(){    updateTimer();    var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));    return Math.floor((timeRemainingMilli % minuteInMilli) / secondInMilli);}
function updateTimer()
{
    console.log("hello");
    input = document.getElementById('countdown').value;
     countdownEl = document.getElementById('countdown');
     input = input.split(":");
     hours = input[0];
     minutes = input[1];
     seconds = input[2];
     
    // Initialize timer
    initializeTimer();

     // Set Time Remaining
     setTimeRemaining(hours, minutes, seconds);

     // Start timer
     startTimer();
     
    interval = setInterval(timeButtonClick, 50);
    
}
