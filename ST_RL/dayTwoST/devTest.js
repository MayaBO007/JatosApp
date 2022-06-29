

const responsesDev = {
    correctRedPressDevtest: correctRedPressDevtest,
    correctBluePressDevtest: correctBluePressDevtest,
    incorrectRedPressDevtest: incorrectRedPressDevtest,
    incorrectBluePressDevtest: incorrectBluePressDevtest,
    redChoiceDev: redChoiceDev,
    blueChoiceDev: blueChoiceDev,
    allRedPressesDev: allRedPressesDev,
    allBluePressesDev: allBluePressesDev,
    allCorrectFirstPressDev: allCorrectFirstPressDev,
    allChoicesDev: allChoicesDev,
    devButton: devButton
};

let saveResponsesDev = {};


document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesDev.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesDev.push(now);
});

let startClickDev = null;
async function startDevTest() {
    breaks = 0;
    countingCars = 0;
    let button = randDevButton();
    return new Promise(resolve => {
        saveResponsesDev[jatos.workerId] = responsesDev;
        jatos.submitResultData(saveResponsesDev);
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            let startClick1 = 1;
            if (startClick1 == 1) {
                document.getElementById("startButton").style.display = "none";
                msCount();
                let startIntervalTest = async function () {
                    let startSwitch = await startInterval2Tests2();
                    if (startSwitch == "done4") {
                    document.getElementById(button).style.display = "inline";
                    document.getElementById(button).onclick = function () {
                    startClickDev = 1;
                    if (startClickDev == 1) {
                            document.getElementById(button).style.display = "none";
                            function startIntervalDevtest() {
                    count = 0;
                    reset_gif();
                    document.getElementById("break").style.display = "none";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    document.getElementById("gameScreen").style.display = "inline";
                    sessionIntervalTest = setInterval(
                        function carMove() {
                            let choseCar = randColorDev();
                            let carSpeed = randSpeedCar();
                            reset_airplane();
                            buttonChoice = 0;
                            if (count >= 20) {
                                clearInterval(sessionIntervalTest);
                                setTimeout(startIntervalDevtest, 2000);
                                document.getElementById("airplane").style.display = "inline";
                                document.getElementById("airplane").style.animationPlayState = "running";
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
                                            correctRedPressDevtest.push(now);
                                            allCorrectFirstPressDev.push(now);
                                        } else {
                                            correctRedPressDevtest.push(now);
                                        }
                                    };
                                    document.getElementById("blueButton").onclick = function () {
                                        buttonChoice = buttonChoice - 1;
                                        if (buttonChoice <= -1) {
                                            incorrectBluePressDevtest.push(now);
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
                                            incorrectRedPressDevtest.push(now);
                                        };
                                    };
                                    document.getElementById("blueButton").onclick = function () {
                                        buttonChoice = buttonChoice + 1;
                                        if (buttonChoice == 1) {
                                            correctBluePressDevtest.push(now);
                                            allCorrectFirstPressDev.push(now);
                                        } else {
                                            correctBluePressDevtest.push(now);
                                        }

                                    };

                                    setTimeout(() => {
                                        reset_blueCar();
                                    }, carSpeed * 1000);
                                };
                                if (countingCars >= 280 & breaks <= 2) {
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
                                    setTimeout(startIntervalDevtest, 30000);
                                    breaks++;
                                }

                            };
                            jatos.submitResultData(saveResponsesDev);
                        }, 0.9 * 1000);// (Maximal carSpeed)*1000
                    let sessionTimerTest = setTimeout(function timeCount() {
                        document.getElementById("blueButton").style.display = "none";
                        document.getElementById("redButton").style.display = "none";
                        clearInterval(sessionIntervalTest);
                        clearTimeout(sessionTimerTest);
                        resolve("doneDayTwoST");
                        reset_airplane();
                    }, 720000);
                };
                startIntervalDevtest();
                msCount();
                    }
                    }
                    }
                } 
                startIntervalTest();
            } 
        };
    })
};