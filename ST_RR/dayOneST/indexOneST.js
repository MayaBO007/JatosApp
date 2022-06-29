

// move to main function
function timeline() {
    // // saveData[jatos.workerId] = dataToSave;
    // let updatedDates = updateDates();
    // if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
    //         document.getElementById("fiveAM").style.display = "inline";
    //     } 
    // else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
    //     if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
    //         document.getElementById("fiveAM").style.display = "inline";
    //     }else{
    let goOneST = async function () {
        let updatedDates = updateDates();
        let doneDayOneST = await start2tests(); // add promise and resolve
        if (doneDayOneST == "doneDayOneST") {
                jatos.studySessionData.doneDayOneST = "doneDayOneST";
                showWinnings()
                jatos.studySessionData.expDaysDate = updatedDates.fullDate;
                // jatos.studySessionData(saveData);
                // jatos.submitResultData(saveData);
                setTimeout(() => {
                jatos.startComponentByPos(3);
                }, 3000)
                        //setTimeout(timeline(), 900000);
                    }
                }
            goOneST()
            }  
//     }else{
//         document.getElementById("endOfGame").style.display = "inline";
// }
// }                                   