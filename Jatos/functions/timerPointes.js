
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

const todayDetails = new Date();

function getTodayStartTime() {
    let hToday = todayDetails.getHours();
    let mToday = todayDetails.getMinutes();
    let sToday = todayDetails.getSeconds();
    let msToday = todayDetails.getMilliseconds();
    hToday = checkTime(h);
    mToday = checkTime(m);
    sToday = checkTime(s);
    msToday = checkTime(ms);
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

    
