import { correctRedPress, correctBluePress } from "./gameInterval.js";




export default function startTimer() {
    let todayHeb = ":היום הרווחת";
    let redCoinsHeb = ":מטבעות אדומים";
    let blueCoinsHeb = ":מטבעות כחולים";
    let seeYouTomorrowHeb = "(:!נתראה מחר";

    let time = null;
    let sessionTimer = setInterval(function timeCount() {
        if (time >= 3) {
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