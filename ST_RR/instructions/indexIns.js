
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
    let goIns = async function () {
    let doneInstructions = await startFirstDay();
    if (doneInstructions == "doneInstructions") {
        jatos.studySessionData.doneInstructions = "doneInstructions";
        // jatos.setStudySessionData(saveData);
        document.getElementById("ins13").style.display = "inline";
        //document.getElementById("startAfterInstructions").style.display = "inline";
        // jatos.studySessionData(saveData);
        setTimeout(() => {
                jatos.startComponentByPos(2);
                }, 2000)
                    }
                }
            goIns();
        }