


const criterion = [];

const expDays = {
    date: "",
}
const doneDays = {
    doneInstructions: "",
    doneDayOneST: "",
    doneDayTwoST: ""
}

// jatos.studySessionData.expDays = {
//     date: "",
// }
// jatos.studySessionData.expDays.date = "";
// jatos.studySessionData.doneDays = {
//     doneInstructions: "",
//     doneDay1: "",
//     doneDay2: "",
//     doneDay3: "",
//     doneDay4: ""
// }
// jatos.studySessionData.doneDays.doneInstructions = "";
// jatos.studySessionData.doneDays.doneDay1 = "";
// jatos.studySessionData.doneDays.doneDay2 = "";
// jatos.studySessionData.doneDays.doneDay3 = "";
// jatos.studySessionData.doneDays.doneDay4 = "";


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


function getStartDate(){
let day = d.getDate();
let month = 1 + d.getMonth();
let year = d.getFullYear();
day = checkTime(day);
month = checkTime(month);
return day + ':' + month + ":" + year;
}

const startDate = getStartDate()
// jatos.studySessionData.startDate = getStartDate();


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

// const dataToSave = {
//     expDays: expDays,
//     doneDays: doneDays,
//     startDate: startDate,
//     criterion: criterion
// };

// jatos.studySessionData = {
//     expDays: expDays,
//     doneDays: doneDays,
//     startDate: startDate,
//     criterion: criterion
// };

// jatos.studySessionData.a = 12;


// jatos.studySessionData = {criterion: criterion, expDays: expDays, doneDays: doneDays, startDate: startDate};
jatos.studySessionData = {criterion: criterion, startDate: startDate, doneInstructions: "", doneDayOneST: "", doneDayTwoST: "", expDaysDate: ""};

function updateDates() {
    let fullDate = new Date();
    let timeNow = getTodayStartTime();
    let today = getTodayDate();
        // if (saveData.doneDays == undefined){
        if (jatos.studySessionData.doneDay1 == ""){
             yesterday = null;
             yesterdayPlusOne = null
        }  else {
            // let yesterday = new Date(saveData.expDays.date= new Date(jatos.studySessionData.expDaysDate);
            yesterday = new Date(jatos.studySessionData.expDaysDate)
            nextDay = new Date(jatos.studySessionData.expDaysDate)
            yesterdayPlusOne = nextDay.setDate(nextDay.getDate() + 1);
            yesterdayPlusOne = new Date(yesterdayPlusOne)
        }
    return { fullDate, timeNow, today, yesterday, yesterdayPlusOne }
}

const todayHeb = ":היום הרווחת";
const redCoinsHeb = ":מטבעות אדומים";
const blueCoinsHeb = ":מטבעות כחולים";
const seeYouTomorrowHeb = "(:!נתראה מחר";
let howManyDays = [];


function showWinnings() {
   // let batchData = getBatchDatas();
    let redWinsLength = correctRedPress.length + correctRedPressYellow.length + correctRedPressSwitch.length; // + correctRedPressDevtest.length
    let blueWinsLength = correctBluePress.length + correctBluePressSwitch.length + correctBluePressYellow.length; //+ correctBluePressDevtest.length
    if (devButton == 0){
        redWinsLength = redWinsLength + correctRedPressDevtest.length;
    } else {
        blueWinsLength = blueWinsLength + correctBluePressDevtest.length;
    }
    if (jatos.studySessionData.doneDayTwoST == "doneDayTwoST") {
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
    // setTimeout(() => {
    //     document.getElementById("endOfDayMessage").style.display = "none";
    //     document.getElementById("todayWins").innerHTML = '';
    //     document.getElementById("redWins").innerHTML = '';
    //     document.getElementById("blueWins").innerHTML = '';
    //     document.getElementById("seeYouTomorrow").innerHTML = '';
    // }, 900000);
    //document.getElementById('endOfDayButton').style.display = "inline";
    // let studySessionData = { "dayFinished": howManyDays.length, "date": getTodayDate() };
    // jatos.setStudySessionData("subjects/" + sub_ID, studySessionData);
};

let breaks = [];


// ***** consts: **** 

const correctRedPress = [];
const correctBluePress = [];
const incorrectRedPress = [];
const incorrectBluePress = [];
const redChoice = [];
const blueChoice = [];
const allRedPresses = [];
const allBluePresses = [];
const allCorrectFirstPress = [];
const allChoices = [];

const correctRedPressSwitch = [];
const correctBluePressSwitch = [];
const incorrectRedPressSwitch = [];
const incorrectBluePressSwitch = [];
const redChoiceSwitch = [];
const blueChoiceSwitch = [];
const allRedPressesSwitch = [];
const allBluePressesSwitch = [];
const allCorrectFirstPressSwitch = [];
const allChoicesSwitch = [];

const correctRedPressYellow = [];
const correctBluePressYellow = [];
const incorrectRedPressYellow = [];
const incorrectBluePressYellow = [];
const redChoiceYellow = [];
const blueChoiceYellow = [];
const yellowChoiceYellow = [];
const allRedPressesYellow = [];
const allBluePressesYellow = [];
const allCorrectFirstPressYellow = [];
const allChoicesYellow = [];
const howManyYellows = [];

const correctRedPressDevtest = [];
const correctBluePressDevtest = [];
const incorrectRedPressDevtest = [];
const incorrectBluePressDevtest = [];
const redChoiceDev = [];
const blueChoiceDev = [];
const allRedPressesDev = [];
const allBluePressesDev = [];
const allCorrectFirstPressDev = [];
const allChoicesDev = [];



let countingCars = null;