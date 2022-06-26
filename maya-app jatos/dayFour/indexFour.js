
// const dataToSave = {
//     expDays: expDays,
//     doneDays: doneDays,
//     startDate: startDate,
//     criterion: criterion
// };


const saveData = {};

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
    let goFour = async function () {
        let doneDayFour = await startDevTest(); // add promise and resolve
        if (doneDayFour == "doneDayFour") {
            showWinnings();
            doneDays.doneDay4 = "doneDayFour";
            expDays.date = updatedDates.fullDate;
            jatos.setStudySessionData(saveData);
            jatos.appendResultData(saveData);
            setTimeout(() => {
                document.getElementById("endOfDayMessage").style.display = "none";
                document.getElementById("todayWins").innerHTML = '';
                document.getElementById("redWins").innerHTML = '';
                document.getElementById("blueWins").innerHTML = '';
                document.getElementById("seeYouTomorrow").innerHTML = '';
                document.getElementById("endOfGame").style.display = "inline";
                setTimeout(() => {
                    jatos.endStudyAjax(true, "great success");
                        }, 60000);
                    }, 5000);
                }
                }
                goFour();
            }

        }}