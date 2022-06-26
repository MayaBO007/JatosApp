
const saveData = {};
let doneInstructions = null;

// move to main function
function timeline() {
   // saveData[jatos.workerId] = dataToSave;
    updatedDates = updateDates();
    if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
            document.getElementById("fiveAM").style.display = "inline";
        } 
    else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
        if (0 < updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
            document.getElementById("fiveAM").style.display = "inline";
        }else{
        let goTwo = async function () {
        let doneDayTwo = await startTraining(); // add promise and resolve
        if (doneDayTwo == "doneDayTwo") {
            showWinnings();
            jatos.studySessionData.doneDay2="doneDayTwo";
            jatos.studySessionData.expDaysDate = updatedDates.fullDate;
            setTimeout(() => {
                jatos.startComponentByPos(4);
                }, 120000)        
        }            
        }
        goTwo()
    } 
}else{
    document.getElementById("endOfGame").style.display = "inline";
}
}
    
                                                            