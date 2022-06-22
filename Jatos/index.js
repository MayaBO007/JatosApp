


// jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
const saveData = {
    //  sub_ID: sub_ID,
    expDays: expDays,
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
            if (doneDays.doneDay1 == "doneDayOne") {
                //show see you tomorrow msg
            } else {
                let goFirst = async function () {
                    let doneDay1 = await startIntervalFirstDay();
                    if (doneDay1 == "doneDayOne") {
                        doneDays.doneDay1 = "doneDayOne";
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
                                        document.getElementById("todayWins").innerHTML = '';
                                        document.getElementById("redWins").innerHTML = '';
                                        document.getElementById("blueWins").innerHTML = '';
                                        document.getElementById("seeYouTomorrow").innerHTML = '';
                                        document.getElementById("wakeup").style.display = "inline";
                                        document.getElementById("wakeup").onclick = function () {
                                            let wakeup = 1;
                                            if (wakeup == 1) {
                                                document.getElementById("wakeup").style.display = "none";
                                                updatedDates = updateDates();
                                                //   if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
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
                                                            document.getElementById("todayWins").innerHTML = '';
                                                            document.getElementById("redWins").innerHTML = '';
                                                            document.getElementById("blueWins").innerHTML = '';
                                                            document.getElementById("seeYouTomorrow").innerHTML = '';
                                                            document.getElementById("wakeup").style.display = "inline";
                                                            document.getElementById("wakeup").onclick = function () {
                                                                let wakeup = 1;
                                                                if (wakeup == 1) {
                                                                    document.getElementById("wakeup").style.display = "none";
                                                                    updatedDates = updateDates();
                                                                    //     if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                                                    wakeup = 0;
                                                                    let goThree = async function () {
                                                                        let doneDayThree = await start2tests(); // add promise and resolve
                                                                        if (doneDayThree == "doneDayThree") {
                                                                            showWinnings();
                                                                            doneDays.doneDay3 = "doneDayThree";
                                                                            document.getElementById("blueButton").style.display = "none";
                                                                            document.getElementById("redButton").style.display = "none";
                                                                            //jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                            expDays.push(updatedDates.fullDate);
                                                                            //jatos.appendResultData(saveData);
                                                                            setTimeout(() => { //set timeout for 5am tomorrow
                                                                                document.getElementById("todayWins").innerHTML = '';
                                                                                document.getElementById("redWins").innerHTML = '';
                                                                                document.getElementById("blueWins").innerHTML = '';
                                                                                document.getElementById("seeYouTomorrow").innerHTML = '';
                                                                                document.getElementById("wakeup").style.display = "inline";
                                                                                document.getElementById("wakeup").onclick = function () {
                                                                                    let wakeup = 1;
                                                                                    if (wakeup == 1) {
                                                                                        document.getElementById("wakeup").style.display = "none";
                                                                                        updatedDates = updateDates();
                                                                                        //     if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) {
                                                                                        let goFour = async function () {
                                                                                            let doneDayFour = await startDevTest(); // add promise and resolve
                                                                                            if (doneDayFour == "doneDayFour") {
                                                                                                doneDays.doneDay4 = "doneDayFour";
                                                                                                showWinnings()
                                                                                                //    jatos.batchSession.add("/subjects/" + sub_ID, sub_info);
                                                                                                expDays.push(updatedDates.fullDate);
                                                                                                //      jatos.appendResultData(saveData);
                                                                                                setTimeout(() => {
                                                                                                    document.getElementById("endOfGame").style.display = "inline";
                                                                                                }, 5000);
                                                                                            }
                                                                                        }
                                                                                        goFour();
                                                                                        // } else {
                                                                                        //     document.getElementById("endOfGame").style.display = "inline";
                                                                                        // }
                                                                                    }
                                                                                }
                                                                            }, timeToWait());
                                                                            // }, 3000);
                                                                        }
                                                                    }
                                                                    goThree()
                                                                    z
                                                                } else {
                                                                    //     document.getElementById("endOfGame").style.display = "inline";
                                                                    // }
                                                                }
                                                            }
                                                        }, timeToWait());
                                                        // }, 3000);
                                                    }
                                                }
                                                goTwo();
                                            }
                                            // else {
                                            //     document.getElementById("endOfGame").style.display = "inline";
                                            // }
                                        }



                                    }, timeToWait());
                                    // }, 3000);
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
                        document.getElementById("todayWins").innerHTML = '';
                        document.getElementById("redWins").innerHTML = '';
                        document.getElementById("blueWins").innerHTML = '';
                        document.getElementById("seeYouTomorrow").innerHTML = '';
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
                                                document.getElementById("todayWins").innerHTML = '';
                                                document.getElementById("redWins").innerHTML = '';
                                                document.getElementById("blueWins").innerHTML = '';
                                                document.getElementById("seeYouTomorrow").innerHTML = '';
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
                                                                        document.getElementById("todayWins").innerHTML = '';
                                                                        document.getElementById("redWins").innerHTML = '';
                                                                        document.getElementById("blueWins").innerHTML = '';
                                                                        document.getElementById("seeYouTomorrow").innerHTML = '';
                                                                        document.getElementById("endOfGame").style.display = "inline";
                                                                    }, 5000);
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
                        document.getElementById("todayWins").innerHTML = '';
                        document.getElementById("redWins").innerHTML = '';
                        document.getElementById("blueWins").innerHTML = '';
                        document.getElementById("seeYouTomorrow").innerHTML = '';
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
                                                document.getElementById("todayWins").innerHTML = '';
                                                document.getElementById("redWins").innerHTML = '';
                                                document.getElementById("blueWins").innerHTML = '';
                                                document.getElementById("seeYouTomorrow").innerHTML = '';
                                                document.getElementById("endOfGame").style.display = "inline";
                                            }, 5000);
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
                            document.getElementById("todayWins").innerHTML = '';
                            document.getElementById("redWins").innerHTML = '';
                            document.getElementById("blueWins").innerHTML = '';
                            document.getElementById("seeYouTomorrow").innerHTML = '';
                            document.getElementById("endOfGame").style.display = "inline";
                        }, 5000);
                    }
                }
                goFour444();
            }
        }

    }
}

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
//start2tests()

//startYellowTest()

//startTraining()

//startCountdown() 