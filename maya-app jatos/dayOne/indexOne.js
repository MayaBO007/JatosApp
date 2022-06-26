
// jatos.onLoad(function () {
//     // Start here with your code that uses jatos.js' variables and functions
//     timeline();
// });


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
    // saveData[jatos.workerId] = dataToSave;
    let updatedDates = updateDates();
    let goFirst = async function () {
        let doneDay1 = await trainingFirstDay();
            if (doneDay1 == "doneDayOne") {
                jatos.studySessionData.doneDay1 = "doneDayOne";
                showWinnings()
                jatos.studySessionData.expDaysDate = updatedDates.fullDate;
                // jatos.studySessionData(saveData);
                // jatos.submitResultData(saveData);
                setTimeout(() => {
                jatos.startComponentByPos(3);
                }, 10000)
                        //setTimeout(timeline(), 900000);
                    }
                }
                goFirst();
            }
    