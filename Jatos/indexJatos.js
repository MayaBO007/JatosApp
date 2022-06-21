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

// jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
const saveData = {
    sub_ID: sub_ID,
    expDays: expDays,
    startDate: startDate
};
jatos.submitResultData(saveData);
let doneInstructions = null;
let doneDay1 = null;

// move to main function
function timeline() {
    let updatedDates = updateDates();
    if (updatedDates.today == startDate) {
        if (doneInstructions == "doneInstructions") {
            if (doneDay1 == "doneDay1") {
                //show see you tomorrow msg
            } else {
                let goFirst = async function () {
                    let doneDay1 = await startIntervalFirstDay();
                    if (doneDay1 == "doneDay1") {
                        showWinnings()
                        expDays.push(updatedDates.fullDate);
                        jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                        jatos.appendResultData(saveData);
                        setTimeou(timeline(), 900000);
                    }
                }
                goFirst();
            }
        } else {
            let goIns = async function () {
                let doneInstructions = await startFirstDay();
                if (doneInstructions == "doneInstructions") {
                    let goOne = async function () {
                        let doneDay1 = await startIntervalFirstDay();
                        if (doneDay1 == "doneDay1") {
                            showWinnings();
                            expDays.push(updatedDates.fullDate);
                            jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                            jatos.appendResultData(saveData);
                            setTimeout(() => { //set timeout for 5am tomorrow
                                document.getElementById("wakeup").style.display = "inline";
                                document.getElementById("wakeup").onclick = function () {
                                    let wakeup = 1;
                                    if (wakeup == 1) {
                                        document.getElementById("wakeup").style.display = "none";
                                        updatedDates = updateDates();
                                        if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                            wakeup = 0;
                                            let goTwo = async function () {
                                                let doneDayTwo = await startTraining(); // add promise and resolve
                                                if (doneDayTwo == "doneDayTwo") {
                                                    showWinnings();
                                                    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                    expDays.push(updatedDates.fullDate);
                                                    jatos.appendResultData(saveData);
                                                    setTimeout(() => { //set timeout for 5am tomorrow
                                                        document.getElementById("wakeup").style.display = "inline";
                                                        document.getElementById("wakeup").onclick = function () {
                                                            let wakeup = 1;
                                                            if (wakeup == 1) {
                                                                document.getElementById("wakeup").style.display = "none";
                                                                updatedDates = updateDates();
                                                                if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                                                    wakeup = 0;
                                                                    let goThree = async function () {
                                                                        let doneDayThree = await start2tests(); // add promise and resolve
                                                                        if (doneDayThree == "doneDayThree") {
                                                                            showWinnings();
                                                                            jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                            expDays.push(updatedDates.fullDate);
                                                                            jatos.appendResultData(saveData);
                                                                            setTimeout(() => { //set timeout for 5am tomorrow
                                                                                document.getElementById("wakeup").style.display = "inline";
                                                                                document.getElementById("wakeup").onclick = function () {
                                                                                    let wakeup = 1;
                                                                                    if (wakeup == 1) {
                                                                                        document.getElementById("wakeup").style.display = "none";
                                                                                        updatedDates = updateDates();
                                                                                        if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                                                                            let goFour = async function () {
                                                                                                let doneDayFour = await startDevTest(); // add promise and resolve
                                                                                                if (doneDayFour == "doneDayFour") {
                                                                                                    showWinnings()
                                                                                                    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                                                    expDays.push(updatedDates.fullDate);
                                                                                                    jatos.appendResultData(saveData);
                                                                                                    setTimeout(() => {
                                                                                                        document.getElementById("endOfGame").style.display = "inline";
                                                                                                    }, 10000);
                                                                                                }
                                                                                            }
                                                                                            goFour();
                                                                                        } else {
                                                                                            document.getElementById("endOfGame").style.display = "inline";
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, timeToWait());
                                                                        }
                                                                    }
                                                                    goThree()
                                                                } else {
                                                                    document.getElementById("endOfGame").style.display = "inline";
                                                                }
                                                            }
                                                        }
                                                    }, timeToWait());
                                                }
                                            }
                                            goTwo();
                                        }
                                        else {
                                            document.getElementById("endOfGame").style.display = "inline";
                                        }
                                    }

                                }

                            }, timeToWait());
                        }
                    }
                    goOne();
                }

            }
            goIns();
        }
    } else if (updatedDates.fullDate.getDate() != updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
        if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) {
            document.getElementById("fiveAM").style.display = "inline";
        } else {
            document.getElementById("endOfGame").style.display = "inline";
        }
    }
    else {
        if (0 < updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
            document.getElementById("fiveAM").style.display = "inline";
        } else if (expDays.length == 1) {
            let goTwo2 = async function () {
                let doneDayTwo = await startTraining();
                if (doneDayTwo == "doneDayTwo") {
                    showWinnings();
                    expDays.push(updatedDates.fullDate)
                    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                    jatos.appendResultData(saveData);
                    setTimeout(() => { //set timeout for 5am tomorrow
                        document.getElementById("wakeup").style.display = "inline";
                        document.getElementById("wakeup").onclick = function () {
                            let wakeup = 1;
                            if (wakeup == 1) {
                                document.getElementById("wakeup").style.display = "none";
                                let updatedDates = updateDates();
                                if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                    wakeup = 0;
                                    let goThree3 = async function () {
                                        let doneDayThree = await start2tests();
                                        if (doneDayThree == "doneDayThree") {
                                            showWinnings();
                                            expDays.push(updatedDates.fullDate);
                                            jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                            jatos.appendResultData(saveData);
                                            setTimeout(() => { //set timeout for 5am tomorrow 
                                                document.getElementById("wakeup").style.display = "inline";
                                                document.getElementById("wakeup").onclick = function () {
                                                    let wakeup = 1;
                                                    if (wakeup == 1) {
                                                        document.getElementById("wakeup").style.display = "none";
                                                        updatedDates = updatedDates();
                                                        if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                                            wakeup = 0;
                                                            let goFour4 = async function () {
                                                                let doneDayFour = await startDevTest(); // add promise and resolve
                                                                if (doneDayFour == "doneDayFour") {
                                                                    showWinnings();
                                                                    expDays.push(updatedDates.fullDate);
                                                                    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                    jatos.appendResultData(saveData);
                                                                    setTimeout(() => {
                                                                        document.getElementById("endOfGame").style.display = "inline";
                                                                    }, 10000);
                                                                }
                                                            }
                                                            goFour4();
                                                        }
                                                        else {
                                                            document.getElementById("endOfGame").style.display = "inline";
                                                        }
                                                    }
                                                }
                                            }, timeToWait());
                                        }
                                    }
                                    goThree3();
                                }
                                else {
                                    document.getElementById("endOfGame").style.display = "inline";
                                }
                            }
                        }
                    }, timeToWait());
                }
            }
            goTwo2();
        }

        else if (expDays.length == 2) {
            let goThree33 = async function () {
                let doneDayThree = await start2tests(); // add promise and resolve
                if (doneDayThree == "doneDayThree") {
                    showWinnings();
                    expDays.push(updatedDates.fullDate);
                    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                    jatos.appendResultData(saveData);
                    setTimeout(() => { //set timeout for 5am tomorrow 
                        document.getElementById("wakeup").style.display = "inline";
                        document.getElementById("wakeup").onclick = function () {
                            let wakeup = 1;
                            if (wakeup == 1) {
                                document.getElementById("wakeup").style.display = "none";
                                updatedDates = updatedDates();
                                if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                    wakeup = 0;
                                    let goFour44 = async function () {
                                        let doneDayFour = await startDevTest(); // add promise and resolve
                                        if (doneDayFour == "doneDayFour") {
                                            showWinnings();
                                            expDays.push(updatedDates.fullDate)
                                            jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                            jatos.appendResultData(saveData);
                                            setTimeout(() => {
                                                document.getElementById("endOfGame").style.display = "inline";
                                            }, 10000);
                                        }
                                    }
                                    goFour44();
                                }
                                else {
                                    document.getElementById("endOfGame").style.display = "inline";
                                }
                            }
                        }
                    }, timeToWait());
                }
            }
            goThree33();
        }
        else {
            if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                let goFour444 = async function () {
                    let doneDayFour = await startDevTest(); // add promise and resolve
                    if (doneDayFour == "doneDayFour") {
                        showWinnings();
                        expDays.push(updatedDates.fullDate)
                        jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                        jatos.appendResultData(saveData);
                        setTimeout(() => {
                            document.getElementById("endOfGame").style.display = "inline";
                        }, 10000);
                    }
                }
                goFour444();
            }
        }

    }
}


const todayHeb = ":היום הרווחת";
const redCoinsHeb = ":מטבעות אדומים";
const blueCoinsHeb = ":מטבעות כחולים";
const seeYouTomorrowHeb = "(:!נתראה מחר";
let howManyDays = [];


function showWinnings() {
    let redWinsLength = correctRedPress.length + correctRedPressDevtest.length + correctRedPressYellow.length + correctRedPressSwitch.length;
    let blueWinsLength = correctBluePress.length + correctBluePressDevtest.length + correctBluePressSwitch.length + correctBluePressYellow.length;
    if (expDays > 3) {
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
    //document.getElementById('endOfDayButton').style.display = "inline";
    // let studySessionData = { "dayFinished": howManyDays.length, "date": getTodayDate() };
    // jatos.setStudySessionData("subjects/" + sub_ID, studySessionData);
};

// function START() {
//     //make sure not for first day:
//     document.getElementById("startPage").style.display = "inline";
//     document.getElementById("moneyCar").style.display = "inline";
//     setTimeout(() => {
//         document.getElementById("startPage").style.display = "none";
//         document.getElementById("moneyCar").style.display = "none";
//         let session = sessionNum()
//         if (session == 1) {
//             startFirstDay();
//         } else if (session == 2) {
//             startTraining();
//         } else if (session == 3) {
//             start2tests();
//         } else
//             startDevTest();
//     }, 1500);
// }

timeline();
// ****************************************************************************************
//  Listen to Orientation changes and handle them accordingly
// ----------------------------------------------------------------------------------------
// initialize variables:

// var screenOrientationEvents = [];
// //var screenInitialOrientation = checkInitialOrientation();

// // check upon entry if it is on portrait mode:

// let checkOrientation = async function () {
//     let isDone = await startInstructions();
//     if (isDone == "done") {
//         function checkInitialOrientation() {
//             if (screen.availWidth < screen.availHeight) {
//                 showOnlyLandscapeMessage()
//                 return 'landscape'
//             } else {
//                 return 'portrait'
//             }
//         }
//     }
// }

// checkOrientation();

// window.addEventListener("orientationchange", function (event) {
//     // if ortation is changed from the main portrait mode
//     if (window.orientation) { // originally I used this: event.target.screen.orientation.angle - but this does not work on iphones
//         showOnlyLandscapeMessage()
//     } else { // device rotated back to the main portrait mode
//         removeOnlyLandscapeMessage()
//     }
//     // record data:
//     screenOrientationEvents.push({
//         orientationAngle: window.orientation,
//         orientationTime: new Date(),
//         OrientationTimeStamp: event.timeStamp,
//     });
// });
// // function showOnlyLandscapeMessage() {
// //     // get current html to determine relevant id for orientation switches
// //     if (logic.isCalledFromInstructions()) {
// //         var element_ID_to_Hide = settings.instructions_main_HTML_element;
// //     } else if (document.location.href.includes(settings.instructionsFileName)) { // if it is called from inside the iframe don't run it (unecessary)
// //         return
// //     } else if (!logic.isCalledFromInstructions()) {
// //         var element_ID_to_Hide = settings.App_main_HTML_element; // The commented parts around were relevant when instructions where not in an iframe
// //     }
// // hide screen and show message:
// //dom_helper.hide(element_ID_to_Hide)
// document.body.style.backgroundImage = 'none'
// if (!document.getElementById("support_only_landscape_msg")) { // if the message element has not been formed already
//     // set the text message:
//     supportOnlyLandscapeMessageElement = document.createElement('h2');
//     supportOnlyLandscapeMessageElement.setAttribute("id", 'support_only_portrait_msg')
//     supportOnlyLandscapeMessageElement.classList.add('centered')
//     supportOnlyLandscapeMessageElement.classList.add('error_message')
//     supportOnlyLandscapeMessageElement.appendChild(document.createTextNode("האפליקציה עובדת רק במצב מאוזן."))
//     supportOnlyLandscapeMessageElement.appendChild(document.createElement("br"))
//     supportOnlyLandscapeMessageElement.appendChild(document.createElement("br"))
//     supportOnlyLandscapeMessageElement.appendChild(document.createTextNode("סובב/י את המכשיר בבקשה."))
//     // set the text box:
//     supportOnlyLandscapeBoxElement = document.createElement('div');
//     supportOnlyLandscapeBoxElement.setAttribute("id", "support_only_portrait_box");
//     supportOnlyLandscapeBoxElement.setAttribute("class", "error_message_screen");

//     // append stuff:
//     supportOnlyLandscapeBoxElement.appendChild(supportOnlyLandscapeMessageElement);
//     document.body.appendChild(supportOnlyLandscapeBoxElement)
// } else {
//     dom_helper.show('support_only_landscape_box')
// }

// function removeOnlyLandscapeMessage() {
//     // get current html to determine relevant id for orientation switches
//     if (logic.isCalledFromInstructions()) {
//         var element_ID_to_Hide = settings.instructions_main_HTML_element;
//     } else if (document.location.href.includes(settings.instructionsFileName)) { // if it is called from inside the iframe don't run it (unecessary)
//         return
//     } else if (!logic.isCalledFromInstructions()) {
//         var element_ID_to_Hide = settings.App_main_HTML_element; // The commented parts around were relevant when instructions where not in an iframe
//     }
//     // remove message and show screen:
//     //dom_helper.show(element_ID_to_Hide)
//     document.body.style.backgroundImage = ''
//     dom_helper.hide('support_only_landscape_box')
// }