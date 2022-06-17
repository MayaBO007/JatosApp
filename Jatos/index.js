
const sub_ID = jatos.workerId;
const doneDays = [];
const expDays = [];
//let sub_info = {"group" : groupNum, "firstDay" : startDate, lastDay : lastDay}
//jatos.batchSession.add("/subjects/" + sub_ID, sub_info);


// move to main function
function timeline() {
    let timeNow = getTodayStartTime();
    let today = getTodayDate();
    if (today == startDate) {
        if (doneDays.slice(0,1) == "doneDay1") {// add promise and resolve
            //show see you tomorrow msg
        } else {
            let doneDay1 = await startFirstDay();
            expDays.push(getTodayDate());
            if (doneDay1 == "doneDay1") {
                doneDays.push("doneDay1");
                let today = getTodayDate();
                let time = getTodayStartTime();
                if (today < firstDay + day) {
                    //set timeout for 5am tomorrow -  time now
                    let doneDayTwo = await startTraining(); // add promise and resolve
                    if (doneDayTwo == "doneDayTwo") {
                        expDays.push(getTodayDate());
                        doneDays.push("doneDayTwo");
                        let today = getTodayDate();
                        let time = getTodayStartTime();
                        if (today < firstDay + day) {
                            //set timeout for 5am tomorrow -  time now
                            let doneDayThree = await start2tests(); // add promise and resolve
                            if (doneDayThree == "doneDayThree") {
                                expDays.push(getTodayDate());
                                doneDays.push("doneDayThree");
                                let today = getTodayDate();
                                let time = getTodayStartTime();
                                if (today < firstDay + day) {
                                    //set timeout for 5am tomorrow -  time now
                                    let doneDayFour = await startDevTest(); // add promise and resolve
                                    if (doneDayFour == "doneDayFour") {
                                        expDays.push(getTodayDate());
                                        doneDays.push("doneDayFour");
                                        // show end of experiment msg
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (!today == lastDay + day) {
        if (today == lastDay) {
            //show see you tomorrow msg
        } else {
            //show game over msg
        }
          }
         else {
    if (00 < timeNow & timeNow < 5am) {
        today = today - day;
        }
        if (doneDays.length==1) {
        let doneDayTwo = await startTraining(); // add promise and resolve
            if (doneDayTwo == "doneDayTwo") {
            expDays.push(getTodayDate());
            doneDays.push("doneDayTwo");
            let today = getTodayDate();
            let time = getTodayStartTime();
            if (today < firstDay + day) {
                //set timeout for 5am tomorrow -  time now
                let doneDayThree = await start2tests(); // add promise and resolve
                if (doneDayThree == "doneDayThree") {
                    expDays.push(getTodayDate());
                    doneDays.push("doneDayThree");
                    let today = getTodayDate();
                    let time = getTodayStartTime();
                    if (today < firstDay + day) {
                        //set timeout for 5am tomorrow -  time now
                        let doneDayFour = await startDevTest(); // add promise and resolve
                        if (doneDayFour == "doneDayFour") {
                            doneDays.push("doneDayFour");
                            // show end of experiment msg
                        }
                    }
                }
            }
        }
    }

        else if (doneDays.length == 2) {
        let doneDayThree = await start2tests(); // add promise and resolve
        if (doneDayThree == "doneDayThree") {
            doneDays.push("doneDayThree");
            let today = getTodayDate();
            let time = getTodayStartTime();
            if (today < firstDay + day) {
                //set timeout for 5am tomorrow -  time now
                let doneDayFour = await startDevTest(); // add promise and resolve
                if (doneDayFour == "doneDayFour") {
                    doneDays.push("doneDayFour");
                    // show end of experiment msg
                }
            }
        }
    }
    else {
        let doneDayFour = await startDevTest(); // add promise and resolve
        if (doneDayFour == "doneDayFour") {
            doneDays.push("doneDayFour");
            // show end of experiment msg
        }
    }
}





let todayHeb = ":היום הרווחת";
let redCoinsHeb = ":מטבעות אדומים";
let blueCoinsHeb = ":מטבעות כחולים";
let seeYouTomorrowHeb = "(:!נתראה מחר";
let howManyDays = [];

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
            howManyDays.push(1);
            //document.getElementById('endOfDayButton').style.display = "inline";
            let studySessionData = { "dayFinished": howManyDays.length, "date": getTodayDate() };
            jatos.setStudySessionData("subjects/" + sub_ID, studySessionData);
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
        let session = sessionNum()
        if (session == 1) {
            startFirstDay();
        } else if (session == 2) {
            startTraining();
        } else if (session == 3) {
            start2tests();
        } else
            startDevTest();
    }, 1500);
}

START();
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