

function timeline() {
    // saveData[jatos.workerId] = dataToSave;
  let updatedDates = updateDates();
    if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
            document.getElementById("fiveAM").style.display = "inline";
        } 
    else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
        if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
            document.getElementById("fiveAM").style.display = "inline";
        }else{
    let goFour = async function (){
    let doneDayTwoST = await startDevTest(); // add promise and resolve
        if (doneDayTwoST == "doneDayTwoST") {
                jatos.studySessionData.doneDayTwoST = "doneDayTwoST";
                showWinnings()
                jatos.studySessionData.expDaysDate = updatedDates.fullDate;
                // jatos.studySessionData(saveData);
                // jatos.submitResultData(saveData);
                setTimeout(() => {
                document.getElementById("endOfDayMessage").style.display = "none";
                document.getElementById("todayWins").innerHTML = '';
                document.getElementById("redWins").innerHTML = '';
                document.getElementById("blueWins").innerHTML = '';
                document.getElementById("seeYouTomorrow").innerHTML = '';
                document.getElementById("endOfGame").style.display = "inline";
                setTimeout(() => {
                    jatos.endStudyAjax(true, "great success");
                        }, 4000);
                    }, 5000);
                }
            }    
              goFour()   
        }      
}else{
document.getElementById("endOfGame").style.display = "inline";
}    
}





