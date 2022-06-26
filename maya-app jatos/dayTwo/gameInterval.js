
const responsesTrainingData = {
    correctRedPress: correctRedPress,
    correctBluePress: correctBluePress,
    incorrectRedPress: incorrectRedPress,
    incorrectBluePress: incorrectBluePress,
    redChoice: redChoice,
    blueChoice: blueChoice,
    allRedPresses: allRedPresses,
    allBluePresses: allBluePresses,
    allCorrectFirstPress: allCorrectFirstPress,
    allChoices: allChoices
};

 saveResponsesTrainingData = {};
//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y


document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});

async function startTraining() {
    return new Promise(resolve => {
        saveResponsesTrainingData[jatos.workerId] = responsesTrainingData;
        jatos.submitResultData(saveResponsesTrainingData);
        breaks = 0;
        countingCars = 0;
        document.getElementById("ins1").style.display = "none";
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            let startClick = 1;
            if (startClick == 1) {
                document.getElementById("startButton").style.display = "none";
                function startInterval() {
                    reset_gif();
                    document.getElementById("break").style.display = "none";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    document.getElementById("gameScreen").style.display = "inline";
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
                                countingCars++;
                            } else {
                                count++;
                                countingCars++
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
                            if (countingCars >= 280 & breaks <= 3) {
                                clearInterval(sessionInterval);
                                reset_redCar();
                                reset_blueCar();
                                reset_airplane();
                                document.getElementById("gameScreen").style.display = "none";
                                document.getElementById("redButton").style.display = "none";
                                document.getElementById("blueButton").style.display = "none";
                                document.getElementById("break").style.display = "inline";
                                document.getElementById("secondCountdown").style.display = "inline";
                                countingCars = 0;
                                setTimeout(startInterval, 30000);
                                breaks++;
                            }
                            jatos.submitResultData(saveResponsesTrainingData);
                        }, 0.7 * 1000);// (Maximal carSpeed)*1000

                    let sessionTimer = setTimeout(function timeCount() {
                        document.getElementById("blueButton").style.display = "none";
                        document.getElementById("redButton").style.display = "none";
                        document.getElementById("break").style.display = "none";
                        clearInterval(sessionInterval);
                        clearTimeout(sessionTimer);
                        reset_airplane();
                        resolve("doneDayTwo");
                    }, 900000);
                }
                startInterval();
                msCount();
            };
        }
    })
}
