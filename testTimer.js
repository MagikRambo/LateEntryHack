
// document.write('<script src="TimerModel.js" ></script>')

// document.getElementById('timerButton').addEventListener('click', updateTimer);

// //var startingMinutes;
// //var time;
// //var countdownEl;

// var hours;
// var minutes;
// var seconds;
// var input;
// var interval;

// function timeButtonClick()
// {
//      //startingMinutes = document.getElementById('countdown').value ; // change this to time inputted
//      //time = startingMinutes * 60;
//      if(getTimeRemainingHours() == 0 && getTimeRemainingMinutes() == 0 && getTimeRemainingSeconds() == 0)
//         clearInterval(interval);
//      countdownEl.value =  getTimeRemainingHours() + " :" + getTimeRemainingMinutes() + " :" + getTimeRemainingSeconds();
     
// }

// function updateTimer()
// {
//     input = document.getElementById('countdown').value;
//      countdownEl = document.getElementById('countdown');
//      input = input.split(":");
//      hours = input[0];
//      minutes = input[1];
//      seconds = input[2];
     
//     // Initialize timer
//     initializeTimer();

//      // Set Time Remaining
//      setTimeRemaining(hours, minutes, seconds);

//      // Start timer
//      startTimer();
     
//     interval = setInterval(timeButtonClick, 50);
    
// }





document.write('<script src="TimerModel.js" ></script>')

document.getElementById('timerButton').addEventListener('click', updateTimer);
//var startingMinutes;
//var time;
var countdownEl;

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

function updateTimer()
{
    var hadRun = JSON.parse(localStorage.getItem("isRunningLocal"));
    console.log(hadRun);
    if(!hadRun)
    {
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
    else
    {
        countdownEl = document.getElementById('countdown');
        hours = getTimeRemainingHours();
        minutes = getTimeRemainingMinutes();
        seconds = getTimeRemainingSeconds();

        setTimeRemaining(hours, minutes, seconds);

        startTimer();
        console.log(hours);
        interval = setInterval(timeButtonClick, 50);
    }

    
    
}
