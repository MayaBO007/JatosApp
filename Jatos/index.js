const expDays = [];
const doneDays = {
    doneInstructions: "",
    doneDay1: "",
    doneDay2: "",
    doneDay3: "",
    doneDay4: ""
}


// jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
const saveData = {
    //  sub_ID: sub_ID,
    //expDays: expDays,
    doneDays: doneDays,
    startDate: startDate
};
//jatos.submitResultData(saveData);
let doneInstructions = null;

// move to main function
function timeline() {
    let updatedDates = updateDates();
    if (updatedDates.today == startDate) {
        if (doneDays.doneInstructions == "doneInstructions") {
            if (doneDays.doneDay1 == "doneDay1") {
                //show see you tomorrow msg
            } else {
                let goFirst = async function () {
                    let doneDay1 = await startIntervalFirstDay();
                    if (doneDay1 == "doneDay1") {
                        doneDays.doneDay1 = "doneDay1";
                        showWinnings()
                        expDays.push(updatedDates.fullDate);
                        //jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                        //  jatos.appendResultData(saveData);
                        setTimeout(timeline(), 900000);
                    }
                }
                goFirst();
            }
        } else {
            let goIns = async function () {
                let doneInstructions = await startFirstDay();
                if (doneInstructions == "doneInstructions") {
                    doneDays.doneInstructions = "doneInstructions";
                    document.getElementById("ins12").style.display = "inline";
                    document.getElementById("startAfterInstructions").style.display = "inline";
                    document.getElementById("startAfterInstructions").onclick = function () {
                        let startGame = 1;
                        if (startGame == 1) {
                            document.getElementById("ins12").style.display = "none";
                            document.getElementById("startAfterInstructions").style.display = "none";
                            let goOne = async function () {
                                let doneDay1 = await startIntervalFirstDay();
                                if (doneDay1 == "doneDayOne") {
                                    doneDays.doneDay1 = "doneDayOne";
                                    showWinnings();
                                    expDays.push(updatedDates.fullDate);
                                    //jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                    // jatos.appendResultData(saveData);
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
                                                            doneDays.doneDay2 = "doneDayTwo";
                                                            // jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                            expDays.push(updatedDates.fullDate);
                                                            // jatos.appendResultData(saveData);
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
                                                                                    doneDays.doneDay3 = "doneDayThree";
                                                                                    //jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                                    expDays.push(updatedDates.fullDate);
                                                                                    //jatos.appendResultData(saveData);
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
                                                                                                            doneDays.doneDay4 = "doneDayFour";
                                                                                                            //    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                                                            expDays.push(updatedDates.fullDate);
                                                                                                            //      jatos.appendResultData(saveData);
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
        } else if (doneDays.doneDay1 == "doneDayOne") {
            let goTwo2 = async function () {
                let doneDayTwo = await startTraining();
                if (doneDayTwo == "doneDayTwo") {
                    expDays.push(updatedDates.fullDate)
                    showWinnings();
                    doneDays.doneDay2 = "doneDayTwo";
                    //     jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                    //     jatos.appendResultData(saveData);
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
                                            doneDays.doneDay3 = "doneDayThree";
                                            //  jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                            //  jatos.appendResultData(saveData);
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
                                                                    doneDays.doneDay4 = "doneDayFour";
                                                                    // jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                    // jatos.appendResultData(saveData);
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


        else if (doneDays.doneDay2 == "doneDayTwo") {
            let goThree33 = async function () {
                let doneDayThree = await start2tests(); // add promise and resolve
                if (doneDayThree == "doneDayThree") {
                    showWinnings();
                    doneDays.doneDay3 = "doneDayThree";
                    expDays.push(updatedDates.fullDate);
                    //   jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                    //   jatos.appendResultData(saveData);
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
                                            doneDays.doneDay4 = "doneDayFour";
                                            expDays.push(updatedDates.fullDate)
                                            //  jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                            //  jatos.appendResultData(saveData);
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
                        doneDays.doneDay4 = "doneDayFour";
                        expDays.push(updatedDates.fullDate)
                        //  jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                        //  jatos.appendResultData(saveData);
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
