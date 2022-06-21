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

const saveResponsesFirstDay = {
    sub_ID: sub_ID,
    expDay: expDays.length + 1,
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
jatos.submitResultData(saveResponsesFirstDay);


//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});


let binaryPress = [];
// Time count function:
function msCountfirstDay() {
    setInterval(function setTimer() {
        now = now + 10;
        if (now >= 10000) {
            let zeroArray = new Array(allChoices.length - allCorrectFirstPress.length).fill(0);
            let oneArray = new Array(allCorrectFirstPress.length).fill(1);
            binaryPress = oneArray.concat(zeroArray);
            let responses = binaryPress.slice(binaryPress.length - 120, binaryPress.length)
            if (d3.mean(responses) >= 0.75) {
                if (d3.variance(responses) <= 0.0025) {
                    criterion.push(now);
                }
            }

        }
    }, 10);

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

async function startIntervalFirstDay() {
    return new Promise(resolve => {
        document.getElementById("ins12").style.display = "inline";
        document.getElementById("startAfterInstructions").style.display = "inline";
        document.getElementById("startAfterInstructions").onclick = function () {
            let startGame = 1;
            if (startGame == 1) {
                document.getElementById("ins12").style.display = "none";
                document.getElementById("startAfterInstructions").style.display = "none";
                function startIntervalDayOne() {
                    msCountfirstDay();
                    document.getElementById("startButton").style.display = "inline";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    document.getElementById("gameScreen").style.display = "inline";
                    document.getElementById("startButton").onclick = function () {
                        startClick = 1;
                        if (startClick == 1) {
                            document.getElementById("startButton").style.display = "none";
                            sessionInterval = setInterval(
                                function carMove() {
                                    let choseCar = randColor();
                                    let carSpeed = randSpeedCar();
                                    reset_airplane();
                                    buttonChoice = 0;
                                    if (count >= 20) {
                                        clearInterval(sessionInterval);
                                        setTimeout(startInterval, 2000);
                                        document.getElementById("airplane").style.display = "inline";
                                        document.getElementById("airplane").style.animationPlayState = "running";
                                        count = 0;
                                    } else {
                                        count++;
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

                                    };
                                    jatos.appendResultData(saveResponsesFirstDay);
                                }, 0.7 * 1000);// (Maximal carSpeed)*1000
                        };
                        let sessionTimer = setTimeout(function timeCount() {
                            document.getElementById("blueButton").style.display = "none";
                            document.getElementById("redButton").style.display = "none";
                            clearInterval(sessionInterval);
                            clearInterval(sessionTimer);
                            resolve("done1");
                        }, 10000);
                    }
                }
                startIntervalDayOne();
            }

            setTimeout(() => {
                if (startGame == null) {
                    startIntervalDayOne()
                }
            }, 900000);
        }

    })
}