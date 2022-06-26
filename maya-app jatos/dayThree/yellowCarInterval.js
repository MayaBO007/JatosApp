
const responsesYellow = {
    correctRedPressYellow: correctRedPressYellow,
    correctBluePressYellow: correctBluePressYellow,
    incorrectRedPressYellow: incorrectRedPressYellow,
    incorrectBluePressYellow: incorrectBluePressYellow,
    redChoiceYellow: redChoiceYellow,
    blueChoiceYellow: blueChoiceYellow,
    allRedPressesYellow: allRedPressesYellow,
    allBluePressesYellow: allBluePressesYellow,
    allCorrectFirstPressYellow: allCorrectFirstPressYellow,
    allChoicesYellow: allChoicesYellow
};

saveResponsesYellow= {};

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesYellow.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesYellow.push(now);
});


async function startIntervalYellow() {
    return new Promise(resolve => {
        saveResponsesYellow[jatos.workerId] = responsesYellow;
        jatos.submitResultData(saveResponsesYellow);
        let sessionIntervalYellow = setInterval(
            function carMove() {
                let choseCar = randColorYellow();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (count >= 20) {
                    clearInterval(sessionIntervalYellow);
                    setTimeout(startIntervalYellow, 1000);
                    document.getElementById("airplane").style.display = "inline";
                    document.getElementById("airplane").style.animationPlayState = "running";
                    count = 0;
                } else {
                    count++;
                    if (choseCar == 0) {
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctRedPressYellow.push(now);
                                allCorrectFirstPressYellow.push(now);
                            } else {
                                correctRedPressYellow.push(now);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePressYellow.push(now);
                            }
                        };
                        setTimeout(() => {
                            reset_redCar();
                        }, carSpeed * 999.9);

                    } else if (choseCar == 1) {
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectRedPressYellow.push(now);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctBluePressYellow.push(now);
                                allCorrectFirstPressYellow.push(now);
                            } else {
                                correctBluePressYellow.push(now);
                            }


                        };
                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 999.9);
                    } else {
                        document.getElementById("yellowCar").style.display = "inline";
                        document.getElementById("yellowCar").style.animationPlayState = "running";
                        document.getElementById("yellowCar").style.animationDuration = "0.7s";

                        setTimeout(() => {
                            reset_yellowCar();
                        }, 0.69 * 1000);
                    }
                };
                jatos.submitResultData(saveResponsesYellow);
            }, 0.7 * 1000);// (Maximal carSpeed)*1000

        let sessionTimerYellow = setTimeout(function timeCount() {
            document.getElementById("blueButton").style.display = "none";
            document.getElementById("redButton").style.display = "none";
            clearInterval(sessionIntervalYellow);
            clearTimeout(sessionTimerYellow);
            carNum = prompt("?כמה מכוניות צהובות ספרת", " ");
            howManyYellows.push(carNum);
            reset_airplane();
            resolve("done3");

        }, 90000);
    });
};

let startClickYellow = null;
function startYellowTest() {
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    document.getElementById("startYellowTestButton").style.display = "inline";
    document.getElementById("startYellowTestButton").onclick = function () {
        startClickYellow = 1;
        if (startClickYellow == 1) {
            document.getElementById("startYellowTestButton").style.display = "none";
            startIntervalYellow();
            //msCount();
        };
    };
};