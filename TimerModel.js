/**
 * @author: Jacob Pehringer
 */

//Constants
const hourInMilli = 3600000;
const minuteInMilli = 60000;
const secondInMilli = 1000;

//Globals
timeRemainingMilli;
lastTimeMilli;
isRunning = false;

/**
 * Set remaining time for timer.
 * @param: numOfHours: number of hours.
 * @param: numOfMinutes: number of minutes.
 * @param: numOfSeconds: number of seconds.
 */
function setTimeRemaining(numOfHours, numOfMinutes, numOfSeconds)
{
    timeRemainingMilli = (numOfHours * hourInMilli) + (numOfMinutes * minuteInMilli) + (numOfSeconds * secondInMilli);
}

/**
 *  @return: the number of seconds reamining.
 */
function getTimeRemainingSeconds()
{
    //updateTimer()
    return (timeRemainingMilli % minutesInMilli) / secondsInMilli;
}

/**
 *  @return: the number of minutes reamining.
 */
function getTimeRemainingMinutes()
{
    //updateTimer()
    return (timeRemainingMilli % hoursInMilli) / minutesInMilli;
}

/**
 *  @return: the number of hours reamining.
 */
function getTimeRemainingHours()
{
    //updateTimer()
    return timeRemainingMilli / hoursInMilli;
}

/**
 *  Starts running the timer. Timer will start decrementing.
 *  If timer is already running nothing will happen.
 */
function startTimer()
{
    //Timer not running, Update lastTimeMilli before running.
    if(!isRunning)
        lastTimeMilli = Date.getMilliseconds();
    //Set timer state to running.
    isRunning = true;
}

/**
 *  Stops the timer. Timer will stop decrementing.
 *  If timer is already stopped nothing will happen.
 */
function stopTimer()
{
    //Timer still running, update timer before pausing.
    if(isRunning)
        updateTimer()
    //Set timer state to paused.
    isRunning = false;
}

/**
 *  This function decrements the remaining time based off
 *  the last start time (lastTimeMilli). if timer is not 
 *  running (isRunning = false) then it will not decrement.
 */
function updateTimer()
{
    //Timer still running, update timeRemainingMilli.
    if(isRunning)
    {
        timeRemainingMilli -= (Date.getMilliseconds() - lastTimeMilli);
        lastTimeMilli = Date.getMilliseconds();
    }
}