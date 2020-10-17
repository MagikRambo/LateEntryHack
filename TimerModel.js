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
function initialize()
{
    chrome.storage.local.set( {"timeRemainingMilliLocal": 0} );
    chrome.storage.local.set( {"lastTimeMilliLocal": 0} );
    chrome.storage.local.set( {"isRunningLocal": false} );
}

/**
 * Set remaining time for timer.
 * @param: numOfHours: number of hours.
 * @param: numOfMinutes: number of minutes.
 * @param: numOfSeconds: number of seconds.
 */
function setTimeRemaining(numOfHours, numOfMinutes, numOfSeconds)
{
    timeRemainingMilli = (numOfHours * hourInMilli) + (numOfMinutes * minuteInMilli) + (numOfSeconds * secondInMilli);
    chrome.storage.local.set( {"timeRemainingMilliLocal": timeRemainingMilli} );
}

/**
 *  @return: the number of seconds reamining.
 */
function getTimeRemainingSeconds()
{
    //updateTimer()
    chrome.storage.local.get( {"timeRemainingMilliLocal": timeRemainingMilli} );
    return (timeRemainingMilli % minutesInMilli) / secondsInMilli;
}

/**
 *  @return: the number of minutes reamining.
 */
function getTimeRemainingMinutes()
{
    //updateTimer()
    chrome.storage.local.get( {"timeRemainingMilliLocal": timeRemainingMilli} );
    return (timeRemainingMilli % hoursInMilli) / minutesInMilli;
}

/**
 *  @return: the number of hours reamining.
 */
function getTimeRemainingHours()
{
    //updateTimer()
    chrome.storage.local.get( {"timeRemainingMilliLocal": timeRemainingMilli} );
    return timeRemainingMilli / hoursInMilli;
}

/**
 *  Starts running the timer. Timer will start decrementing.
 *  If timer is already running nothing will happen.
 */
function startTimer()
{
    //Timer not running, Update lastTimeMilli before running.
    chrome.storage.local.get( {"isRunningLocal": isRunning} );
    if(!isRunning)
        chrome.storage.local.set( {"lastTimeMilliLocal": Date.getMilliseconds()} );
    //Set timer state to running.
    chrome.storage.local.set( {"isRunningLocal": true} );
}

/**
 *  Stops the timer. Timer will stop decrementing.
 *  If timer is already stopped nothing will happen.
 */
function stopTimer()
{
    //Timer still running, update timer before pausing.
    chrome.storage.local.get( {"isRunningLocal": isRunning} );
    if(isRunning)
        updateTimer()
    //Set timer state to paused.
    chrome.storage.local.set( {"isRunningLocal": false} );
}

/**
 *  This function decrements the remaining time based off
 *  the last start time (lastTimeMilli). if timer is not 
 *  running (isRunning = false) then it will not decrement.
 */
function updateTimer()
{
    //Timer still running, update timeRemainingMilli.
    chrome.storage.local.get( {"isRunningLocal": isRunning} );
    if(isRunning)
    {
        chrome.storage.local.get( {"timeRemainingMilliLocal": timeRemainingMilli} );
        timeRemainingMilli -= (Date.getMilliseconds() - lastTimeMilli);
        chrome.storage.local.set( {"timeRemainingMilliLocal": timeRemainingMilli} );

        chrome.storage.local.set( {"lastTimeMilliLocal": Date.getMilliseconds()} );

    }
}