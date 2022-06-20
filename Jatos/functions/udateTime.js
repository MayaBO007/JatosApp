
// function timeToWait() {
//     let todayEndDetails = new Date();
//     let hToday = todayEndDetails.getHours();
//     let mToday = todayEndDetails.getMinutes();
//     let sToday = todayEndDetails.getSeconds();
//     let msToday = todayEndDetails.getMilliseconds();
//     hChange = (29-checkTime(hToday))*3600000;
//     mChange = (60-checkTime(mToday))*60000;
//     sChange = (60-checkTime(sToday))*1000;
//     msChange = (999-checkTime(msToday));

//     let msToWait = hChange + mChange + sChange + msChange;
//     console.log(msToWait)
//     return (msToWait);

// }

// function getTodayDate() {
//     let dayToday = todayDetails.getDate();
//     let monthToday = 1 + todayDetails.getMonth();
//     let yearToday = todayDetails.getFullYear();
//     dayToday = checkTime(day);
//     monthToday = checkTime(month);
//     let today = dayToday + ':' + monthToday + ":" + yearToday;
//     console.log(today);
//     return (today);

// }

const date12 = new Date();
let dayday = date12.getDate();
//console.log(dayday, date12);
newDate = date12.setDate(date12.getDate() - 1)
//console.log(newDate);

let dateTom = new Date(newDate);
//console.log(dateTom)

//let fullDate = new Date();
// let timeNow = getTodayStartTime();
// let today = getTodayDate();
// let yesterday = dateTom;
// let yesterdayPlusOne = yesterday.setDate(yesterday.getDate() + 1);
// yesterdayPlusOne = new Date(yesterdayPlusOne)
//console.log(yesterdayPlusOne.getDate())

let fullDate = new Date();
//console.log(fullDate)

const expDays = [date12, date12]

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
let updatedDates = updateDates();
console.log(updatedDates.fullDate.getDate())
console.log(updatedDates.yesterdayPlusOne.getDate())

document.getElementById("endYellowTestButton").style.display = "inline";