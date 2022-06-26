
// const dataToSave = {
//     expDays: expDays,
//     doneDays: doneDays,
//     startDate: startDate,
//     criterion: criterion
// };


const saveData = {};
let doneInstructions = null;

// move to main function
function timeline() {
    saveData[jatos.workerId] = dataToSave;
    let updatedDates = updateDates();
    if (updatedDates.fullDate.getDate() != updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
        if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) {
            document.getElementById("fiveAM").style.display = "inline";
        } else {
            document.getElementById("endOfGame").style.display = "inline";
        }
    }
    else {
        if (0 < updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
            document.getElementById("fiveAM").style.display = "inline";
        }else{
    
    let goThree = async function () {
        let doneDayThree = await start2tests(); // add promise and resolve
        if (doneDayThree == "doneDayThree") {
            showWinnings();
            doneDays.doneDay3 = "doneDayThree";
            document.getElementById("blueButton").style.display = "none";
            document.getElementById("redButton").style.display = "none";
            expDays.date = updatedDates.fullDate;
            jatos.setStudySessionData(saveData);
            jatos.appendResultData(saveData);
            setTimeout(() => {
                jatos.startComponentByPos(5);
                }, 120000)
        }
    }
        goThree()
    }
}}
    