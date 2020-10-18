/**
 * @author: Jacob Pehringer
 */

//Constants
hourInMilli = 3600000;
minuteInMilli = 60000;
secondInMilli = 1000;

/**
 * Run this functions before using any other TimerModel functions
 * Sets assisted memory in chrome for timer.
 */
function initializeTimer()
{
    localStorage.setItem("timeRemainingMilliLocal", JSON.stringify(0));
    localStorage.setItem("lastTimeMilliLocal", JSON.stringify(0));
    localStorage.setItem("isRunningLocal", JSON.stringify(false));
}

/**
 * Set remaining time for timer.
 * @param: numOfHours: number of hours.
 * @param: numOfMinutes: number of minutes.
 * @param: numOfSeconds: number of seconds.
 */
function setTimeRemaining(numOfHours, numOfMinutes, numOfSeconds)
{
    var timeRemainingMilli = (numOfHours * hourInMilli) + (numOfMinutes * minuteInMilli) + (numOfSeconds * secondInMilli);
    localStorage.setItem("timeRemainingMilliLocal", JSON.stringify(timeRemainingMilli));
}

/**
 *  @return: the number of seconds reamining.
 */
function getTimeRemainingSeconds()
{
    updateTimer();
    var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));
    return Math.floor((timeRemainingMilli % minuteInMilli) / secondInMilli);
}

/**
 *  @return: the number of minutes reamining.
 */
function getTimeRemainingMinutes()
{
    updateTimer();
    var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));
    return Math.floor((timeRemainingMilli % hourInMilli) / minuteInMilli);
}

/**
 *  @return: the number of hours reamining.
 */
function getTimeRemainingHours()
{
    updateTimer();
    var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));
    return Math.floor(timeRemainingMilli / hourInMilli);
}

/**
 *  Starts running the timer. Timer will start decrementing.
 *  If timer is already running nothing will happen.
 */
function startTimer()
{
    //JSON.stringify(obj)
    //Timer not running, Update lastTimeMilli before running.
    var isRunning = JSON.parse(localStorage.getItem("isRunningLocal"));
    var currentTimeMilli = new Date().getTime();
    if(!isRunning)
        localStorage.setItem("lastTimeMilliLocal", JSON.stringify(currentTimeMilli));
    //Set timer state to running.
    localStorage.setItem("isRunningLocal", JSON.stringify(true));
}

/**
 *  Stops the timer. Timer will stop decrementing.
 *  If timer is already stopped nothing will happen.
 */
function stopTimer()
{
    //Timer still running, update timer before pausing.
    var isRunning = JSON.parse(localStorage.getItem("isRunningLocal"));
    if(isRunning)
        updateTimer();
    //Set timer state to paused.
    localStorage.setItem("isRunningLocal", JSON.stringify(false));
}

/**
 *  This function decrements the remaining time based off
 *  the last start time (lastTimeMilli). if timer is not 
 *  running (isRunning = false) then it will not decrement.
 */
function updateTimer()
{
    //Timer still running, update timeRemainingMilli.
    var isRunning = JSON.parse(localStorage.getItem("isRunningLocal"));
    if(isRunning)
    {
        var timeRemainingMilli = JSON.parse(localStorage.getItem("timeRemainingMilliLocal"));
        var lastTimeMilli = JSON.parse(localStorage.getItem("lastTimeMilliLocal"));
        var currentTimeMilli = new Date().getTime();
        //console.log(milliTime.getTime())
        //console.log("-");
        //console.log(lastTimeMilli);
        timeRemainingMilli -= (currentTimeMilli - lastTimeMilli);
        //console.log(timeRemainingMilli);
        if(timeRemainingMilli <= 0)
            timeRemainingMilli = 1; //prevent div by zero error.
        localStorage.setItem("timeRemainingMilliLocal", JSON.stringify(timeRemainingMilli));
        localStorage.setItem("lastTimeMilliLocal", JSON.stringify(currentTimeMilli));
    }
}


function consoleTimerResults()
{
    console.log(getTimeRemainingHours() + ":" + getTimeRemainingMinutes() + ":" + getTimeRemainingSeconds());
}
