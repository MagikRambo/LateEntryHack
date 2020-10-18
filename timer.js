





document.write('<script src="TimerModel.js" ></script>');


//get the input from user after button click


//update the time in input


document.getElementById("timerId").style.animation()

//initialize the TimerModel.js timers
initializeTimer();

var input= "02:19:20"

//split input into format for Timer.js
var timesplit = input.split(':');

setTimeRemaining(timesplit[0],timesplit[1], timesplit[2]);

//starts the timer after it splits
startTimer();