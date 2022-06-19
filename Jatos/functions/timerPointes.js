
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};

const d = new Date();
let day = d.getDate();
let month = 1 + d.getMonth();
let year = d.getFullYear();
day = checkTime(day);
month = checkTime(month);
const startDate = day + ':' + month + ":" + year;



function startTimer() {
    let todayHeb = ":היום הרווחת";
    let redCoinsHeb = ":מטבעות אדומים";
    let blueCoinsHeb = ":מטבעות כחולים";
    let seeYouTomorrowHeb = "(:!נתראה מחר";

    let time = null;
    let sessionTimer = setInterval(function timeCount() {
        if (time >= 100) {
            document.getElementById("blueButton").style.display = "none";
            document.getElementById("redButton").style.display = "none";
            clearInterval(sessionTimer);
            let redWinsLength = correctRedPress.length;
            let blueWinsLength = correctBluePress.length;
            document.getElementById("endOfDayMessage").style.display = "inline";
            document.getElementById("todayWins").innerHTML = todayHeb;
            document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
            document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
            document.getElementById("seeYouTomorrow").innerHTML = seeYouTomorrowHeb;
            //document.getElementById('endOfDayButton').style.display = "inline";
        } else {
            time++;
        }
    }, 1000);
};

let now = null;
function msCount() {
    setInterval(function setTimer() {
        now = now + 10;
    }, 10);
};

const todayStartDetails = new Date();

function getTodayStartTime() {
    let hToday = todayStartDetails.getHours();
    let mToday = todayStartDetails.getMinutes();
    let sToday = todayStartDetails.getSeconds();
    let msToday = todayStartDetails.getMilliseconds();
    hToday = checkTime(hToday);
    mToday = checkTime(mToday);
    sToday = checkTime(sToday);
    msToday = checkTime(msToday);
    let startTimeToday = hToday + ":" + mToday + ":" + sToday + ":" + msToday;
    return (startTimeToday);
}

function getTodayDate() {
    let dayToday = todayDetails.getDate();
    let monthToday = 1 + todayDetails.getMonth();
    let yearToday = todayDetails.getFullYear();
    dayToday = checkTime(day);
    monthToday = checkTime(month);
    let today = dayToday + ':' + monthToday + ":" + yearToday;
    return (today);

}

function timeToWait() {
    let todayEndDetails = new Date();
    let hToday = todayEndDetails.getHours();
    let mToday = todayEndDetails.getMinutes();
    let sToday = todayEndDetails.getSeconds();
    let msToday = todayEndDetails.getMilliseconds();
    hChange = (29-checkTime(hToday))*3600000;
    mChange = (60-checkTime(mToday))*60000;
    sChange = (60-checkTime(sToday))*1000;
    msChange = (999-checkTime(msToday));
     
    let msToWait = hChange + mChange + sChange + msChange;
    return (msToWait);
}
    
