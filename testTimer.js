/**
 * @author Jordan Jimenez
 */

document.write('<script src="TimerModel.js" ></script>')

// Grab Submit and GetTime Buttons
document.getElementById('timerButton').addEventListener('click', updateTimer);
document.getElementById('getTimeButton').addEventListener('click', updateTimer);

var hours, minutes, seconds, input, interval, countdownE1;

/**
 * Display the time to the form. Clear Interval if time goes below 0.
 */
function displayTime()
{  
    if(getTimeRemainingHours() == 0 && getTimeRemainingMinutes() == 0 && getTimeRemainingSeconds() == 0)
        clearInterval(interval);
    countdownEl.value =  getTimeRemainingHours() + " :" + getTimeRemainingMinutes() + " :" + getTimeRemainingSeconds(); 
}

/**
 * Set the time correctly using methods from TimerModel.js
 */
function updateTimer()
{
    // Check if the time has been modified
    var hadRun = JSON.parse(localStorage.getItem("isRunningLocal"));

    if(!hadRun)
    {
        // Set all the variables with the time the user input
        input = document.getElementById('countdown').value;
        countdownEl = document.getElementById('countdown');
        input = input.split(":");
        hours = input[0];
        minutes = input[1];
        seconds = input[2];
     
        // Initialize and start timer
        initializeTimer();
        setTimeRemaining(hours, minutes, seconds);
        startTimer();
     
        // Update time
        interval = setInterval(displayTime, 50);
    }
    else
    {
        // Set all variables with timer that has already started
        countdownEl = document.getElementById('countdown');
        hours = getTimeRemainingHours();
        minutes = getTimeRemainingMinutes();
        seconds = getTimeRemainingSeconds();

        // Continue time
        setTimeRemaining(hours, minutes, seconds);
        startTimer();
        interval = setInterval(displayTime, 50);
    }
}