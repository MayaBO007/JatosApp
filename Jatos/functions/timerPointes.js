const expDays = [];
const doneDays = {
    doneInstructions: "",
    doneDay1: "",
    doneDay2: "",
    doneDay3: "",
    doneDay4: ""
}

let now = null;
function msCount() {
    msIntAll = setInterval(function setTimer() {
        now = now + 10;
        if (now >= 900000)
            clearInterval(msIntAll);
    }, 10);
};
const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
ms = checkTime(ms);
let startTime = h + ":" + m + ":" + s + ":" + ms;

let day = d.getDate();
let month = 1 + d.getMonth();
let year = d.getFullYear();
day = checkTime(day);
month = checkTime(month);
const startDate = day + ':' + month + ":" + year;


function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};


function getTodayStartTime() {
    let todayStartDetails = new Date();
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
    let todayStartDetails = new Date();
    let dayToday = todayStartDetails.getDate();
    let monthToday = 1 + todayStartDetails.getMonth();
    let yearToday = todayStartDetails.getFullYear();
    dayToday = checkTime(dayToday);
    monthToday = checkTime(monthToday);
    let today = dayToday + ':' + monthToday + ":" + yearToday;
    return (today);

}

function timeToWait() {
    let todayEndDetails = new Date();
    let hToday = todayEndDetails.getHours();
    let mToday = todayEndDetails.getMinutes();
    let sToday = todayEndDetails.getSeconds();
    let msToday = todayEndDetails.getMilliseconds();
    hChange = (28 - checkTime(hToday)) * 3600000;
    mChange = (60 - checkTime(mToday)) * 60000;
    sChange = (60 - checkTime(sToday)) * 1000;
    msChange = (999 - checkTime(msToday));

    let msToWait = hChange + mChange + sChange + msChange;
    return (msToWait);
}



function updateDates() {
    let fullDate = new Date();
    let timeNow = getTodayStartTime();
    let today = getTodayDate();
    if (startDate !== getTodayDate()) {
        let yesterday = expDays.slice(-1);
        yesterday = new Date(yesterday);
        let yesterdayPlusOne = yesterday.setDate(yesterday.getDate() + 1);
        yesterdayPlusOne = new Date(yesterdayPlusOne)
    } else {
        yesterday = null;
        yesterdayPlusOne = null
    }
    return { fullDate, timeNow, today, yesterday, yesterdayPlusOne }
}

const todayHeb = ":היום הרווחת";
const redCoinsHeb = ":מטבעות אדומים";
const blueCoinsHeb = ":מטבעות כחולים";
const seeYouTomorrowHeb = "(:!נתראה מחר";
let howManyDays = [];


function showWinnings() {
    let redWinsLength = correctRedPress.length + correctRedPressDevtest.length + correctRedPressYellow.length + correctRedPressSwitch.length;
    let blueWinsLength = correctBluePress.length + correctBluePressDevtest.length + correctBluePressSwitch.length + correctBluePressYellow.length;
    if (doneDays.doneDay4 == "doneDayFour") {
        document.getElementById("blueButton").style.display = "none";
        document.getElementById("redButton").style.display = "none";
        document.getElementById("endOfDayMessage").style.display = "inline";
        document.getElementById("todayWins").innerHTML = todayHeb;
        document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
        document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
        howManyDays.push(1);
    } else {
        document.getElementById("blueButton").style.display = "none";
        document.getElementById("redButton").style.display = "none";
        document.getElementById("endOfDayMessage").style.display = "inline";
        document.getElementById("todayWins").innerHTML = todayHeb;
        document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
        document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
        document.getElementById("seeYouTomorrow").innerHTML = seeYouTomorrowHeb;
        howManyDays.push(1);
    }
    setTimeout(() => {
        document.getElementById("endOfDayMessage").style.display = "none";
        document.getElementById("todayWins").innerHTML = '';
        document.getElementById("redWins").innerHTML = '';
        document.getElementById("blueWins").innerHTML = '';
        document.getElementById("seeYouTomorrow").innerHTML = '';
    }, 3000);
    //document.getElementById('endOfDayButton').style.display = "inline";
    // let studySessionData = { "dayFinished": howManyDays.length, "date": getTodayDate() };
    // jatos.setStudySessionData("subjects/" + sub_ID, studySessionData);
};

function testsFirstInterval() {
    if (saveResponsesFirstDay.criterion >= 8) {
        intervalDuration = 420000;
    } else {
        intervalDuration = saveResponsesFirstDay.criterion;
    }
    return intervalDuration
}

let breaks = [];
let countingCars = null;