

document.getElementById('timerButton').addEventListener('click', timeButtonClick);

var startingMinutes;
var time;
var countdownEl;

function timeButtonClick()
{
     startingMinutes = document.getElementById('countdown').value ; // change this to time inputted
     time = startingMinutes * 60;
     countdownEl = document.getElementById('countdown');
    
setInterval(updateCountdown, 1000);

}


function updateCountdown()
{
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds;

    countdownEl.value = `${minutes}:${seconds}`;
    time--;
}