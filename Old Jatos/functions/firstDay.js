const correctRedPress = [];
const correctBluePress = [];
const incorrectRedPress = [];
const incorrectBluePress = [];
const redChoice = [];
const blueChoice = [];
const allRedPresses = [];
const allBluePresses = [];
const allCorrectFirstPress = [];
const allChoices = [];
const criterion = [];

const responsesFirstData = {
    todayDate: updatedDates.today,
    correctRedPress: correctRedPress,
    correctBluePress: correctBluePress,
    incorrectRedPress: incorrectRedPress,
    incorrectBluePress: incorrectBluePress,
    redChoice: redChoice,
    blueChoice: blueChoice,
    allRedPresses: allRedPresses,
    allBluePresses: allBluePresses,
    allCorrectFirstPress: allCorrectFirstPress,
    allChoices: allChoices,
    criterion: criterion
};
let saveResponsesFirstData = {};





//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});

function checkPress(press) {
    return press > allChoices[allChoices.length - 120];
}

let binaryPress = [];
let criterionCheck = null;
// Time count function:
function msCountfirstDay() {
    criteriaTimeout = setTimeout(() => {
        msIntr = setInterval(function setTimer() {

            let corrLast = allCorrectFirstPress.slice(allCorrectFirstPress.indexOf(allCorrectFirstPress.find(checkPress)), allCorrectFirstPress.length);
            let zeroArray = new Array(120 - corrLast.length).fill(0);
            let oneArray = new Array(corrLast.length).fill(1);
            binaryPress = oneArray.concat(zeroArray);
            if (d3.mean(binaryPress) >= 0.75 || criterionCheck >= 5) {
                if (d3.variance(binaryPress) <= 0.0025) {
                    criterion.push(now);
                    clearInterval(msIntr);
                }
            } else {
                zeroArray, binaryPress, oneArray, corrLast = null;
                criterionCheck++;
            }
        }, 1000);
    }, 180000)
};

let count = 0; // counter for iterations
// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;


//let nextClick = null;
let demoClick = null;
let qClick = null;
async function startFirstDay() {
    return new Promise(resolve => {
        let goOn = async function () {
            let isDone = await startInstructions();
            if (isDone == "done") {
                document.getElementById("ins11").style.display = "inline";
                document.getElementById("demoStart").style.display = "inline";
                document.getElementById("demoStart").onclick = function () {
                    demoClick = 1;
                    if (demoClick == 1) {
                        document.getElementById("demoStart").style.display = "none";
                        document.getElementById("ins11").style.display = "none";
                        document.getElementById("redButton").style.display = "inline";
                        document.getElementById("blueButton").style.display = "inline";
                        document.getElementById("gameScreen").style.display = "inline";
                        let goOnTwo = async function () {
                            let demoDone = await demo();
                            if (demoDone == "done") {
                                document.getElementById("redButton").style.display = "none";
                                document.getElementById("blueButton").style.display = "none";
                                document.getElementById("gameScreen").style.display = "none";
                                document.getElementById("qPage").style.display = "inline";
                                document.getElementById("qStart").style.display = "inline";
                                document.getElementById("qStart").onclick = function () {
                                    qClick = 1;
                                    if (qClick == 1) {
                                        window.open("functions/questions/Multiple-Choice-Quiz-JavaScript-master/index.html");
                                        document.getElementById("qPage").style.display = "none";
                                        document.getElementById("qStart").style.display = "none";

                                        resolve("doneInstructions")
                                    }
                                }
                            }
                        }
                        goOnTwo();
                    }
                }
            }
        }
        goOn();
    })
}

let startGame = null;

async function trainingFirstDay() {
    return new Promise(resolve => {
        saveResponsesFirstData[jatos.workerId] = responsesFirstData;
        jatos.submitResultData(saveResponsesFirstData);
        countingCars = 0;
        breaks = 0;
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            startClick = 1;
            if (startClick == 1) {
                msCountfirstDay();
                document.getElementById("startButton").style.display = "none";
                function startIntervalFirstDay() {
                    reset_gif();
                    document.getElementById("break").style.display = "none";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    document.getElementById("gameScreen").style.display = "inline";
                    sessionIntervalFirstDay = setInterval(
                        function carMove() {
                            let choseCar = randColor();
                            let carSpeed = randSpeedCar();
                            reset_airplane();
                            buttonChoice = 0;
                            if (count >= 20) {
                                clearInterval(sessionIntervalFirstDay);
                                document.getElementById("airplane").style.display = "inline";
                                document.getElementById("airplane").style.animationPlayState = "running";
                                setTimeout(startIntervalFirstDay, 2000);
                                if (now > 30000) {
                                    clearTimeout(sessionTimerFirstDay);
                                }
                                count = 0;
                                countingCars++;
                            } else {
                                count++;
                                countingCars++;
                                if (choseCar >= 0.5) {
                                    document.getElementById("redCar").style.display = "inline";
                                    document.getElementById("redCar").style.animationPlayState = "running";
                                    document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                                    document.getElementById("redButton").onclick = function () {
                                        buttonChoice = buttonChoice + 1;
                                        if (buttonChoice == 1) {
                                            correctRedPress.push(now);
                                            allCorrectFirstPress.push(now);
                                        } else {
                                            correctRedPress.push(now);
                                        }
                                    };
                                    document.getElementById("blueButton").onclick = function () {
                                        buttonChoice = buttonChoice - 1;
                                        if (buttonChoice <= -1) {
                                            incorrectBluePress.push(now);
                                        }
                                    };

                                    setTimeout(() => {
                                        reset_redCar();
                                    }, carSpeed * 1000);
                                } else {
                                    document.getElementById("blueCar").style.display = "inline";
                                    document.getElementById("blueCar").style.animationPlayState = "running";
                                    document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                                    document.getElementById("redButton").onclick = function () {
                                        buttonChoice = buttonChoice - 1;
                                        if (buttonChoice <= -1) {
                                            incorrectRedPress.push(now);
                                        };
                                    };
                                    document.getElementById("blueButton").onclick = function () {
                                        buttonChoice = buttonChoice + 1;
                                        if (buttonChoice == 1) {
                                            correctBluePress.push(now);
                                            allCorrectFirstPress.push(now);
                                        } else {
                                            correctBluePress.push(now);
                                        }

                                    };

                                    setTimeout(() => {
                                        reset_blueCar();
                                    }, carSpeed * 1000);
                                };
                                if (countingCars >= 280 & breaks <= 2) {
                                    reset_redCar();
                                    reset_blueCar();
                                    reset_airplane();
                                    clearInterval(sessionIntervalFirstDay);
                                    document.getElementById("gameScreen").style.display = "none";
                                    document.getElementById("redButton").style.display = "none";
                                    document.getElementById("blueButton").style.display = "none";
                                    document.getElementById("break").style.display = "inline";
                                    document.getElementById("secondCountdown").style.display = "inline";
                                    countingCars = 0;
                                    setTimeout(startIntervalFirstDay, 30000);
                                    breaks++;
                                }

                            };
                            jatos.appendResultData(saveResponsesFirstData);
                        }, 0.7 * 1000);// (Maximal carSpeed)*1000

                    let sessionTimerFirstDay = setTimeout(function timeCount() {
                        reset_airplane();
                        document.getElementById("blueButton").style.display = "none";
                        document.getElementById("redButton").style.display = "none";
                        clearInterval(sessionIntervalFirstDay);
                        clearTimeout(sessionTimerFirstDay);
                        resolve("doneDayOne");
                    }, 899000);
                }
                startIntervalFirstDay();
                msCount();
            }
        }
    })
}