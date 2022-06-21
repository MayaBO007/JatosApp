// function startTimer() {
//     let todayHeb = ":היום הרווחת";
//     let redCoinsHeb = ":מטבעות אדומים";
//     let blueCoinsHeb = ":מטבעות כחולים";
//     let seeYouTomorrowHeb = "(:!נתראה מחר";

//     let time = null;
//     let sessionTimer = setInterval(function timeCount() {
//         if (time >= 100) {
//             document.getElementById("blueButton").style.display = "none";
//             document.getElementById("redButton").style.display = "none";
//             clearInterval(sessionTimer);
//             let redWinsLength = correctRedPress.length;
//             let blueWinsLength = correctBluePress.length;
//             document.getElementById("endOfDayMessage").style.display = "inline";
//             document.getElementById("todayWins").innerHTML = todayHeb;
//             document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
//             document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
//             document.getElementById("seeYouTomorrow").innerHTML = seeYouTomorrowHeb;
//             //document.getElementById('endOfDayButton').style.display = "inline";
//         } else {
//             time++;
//         }
//     }, 1000);
// };

let now = null;
function msCount() {
    setInterval(function setTimer() {
        now = now + 10;
    }, 10);
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
    hChange = (29 - checkTime(hToday)) * 3600000;
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
    let yesterday = expDays.slice(-1);
    yesterday = new Date(yesterday);
    let yesterdayPlusOne = yesterday.setDate(yesterday.getDate() + 1);
    yesterdayPlusOne = new Date(yesterdayPlusOne)
    return { fullDate, timeNow, today, yesterday, yesterdayPlusOne }
}