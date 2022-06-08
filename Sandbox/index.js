import startTraining, { correctBluePress, correctRedPress } from "./functions/gameInterval.js";
import startFirstDay from "./functions/firstDay.js";
import startYellowTest from "./Tests/yellowCarInterval.js"
import startSwitchTest from "./Tests/switchButtonsTest.js"
import startDevTest from "./Tests/devTest.js"

// Date and time functions:
// add zero in front of numbers < 10

//session strart time:
/*
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
console.log(startDate + ' ' + startTime);

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};

*/
let todayHeb = ":היום הרווחת";
let redCoinsHeb = ":מטבעות אדומים";
let blueCoinsHeb = ":מטבעות כחולים";
let seeYouTomorrowHeb = "(:!נתראה מחר";

let time = 0;
function startTimer() {
    let sessionTimer = setInterval(function timeCount() {
        if (time >= 20) {
            clearInterval(sessionTimer);
            let redWinsLength = correctRedPress.length;
            let blueWinsLength = correctBluePress.length;
            document.getElementById("blueButton").style.display = "none";
            document.getElementById("redButton").style.display = "none";
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

function START() {
    //make sure not for first day:
    document.getElementById("startPage").style.display = "inline";
    document.getElementById("moneyCar").style.display = "inline";
    setTimeout(() => {
        document.getElementById("startPage").style.display = "none";
        document.getElementById("moneyCar").style.display = "none";
        startTraining();
        //startFirstDay();
        //startYellowTest();
        //startSwitchTest();
        //startDevTest();
    }, 1500);
}

START();