

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
    allChoicesDev: allChoicesDev
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
    return new Promise(resolve => {
        saveResponsesDev[jatos.workerId] = responsesDev;
        jatos.submitResultData(saveResponsesDev);
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startDevtestButton").style.display = "inline";
        document.getElementById("startDevtestButton").onclick = function () {
            startClickDev = 1;
            if (startClickDev == 1) {
                document.getElementById("startDevtestButton").style.display = "none";
                function startIntervalDevtest() {
                    count = 0;
                    reset_gif();
                    document.getElementById("break").style.display = "none";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    document.getElementById("gameScreen").style.display = "inline";
                    sessionInterval = setInterval(
                        function carMove() {
                            let choseCar = randColorDev();
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
                                    setTimeout(startInterval, 30000);
                                    breaks++;
                                }

                            };
                            jatos.submitResultData(saveResponsesDev);
                        }, 0.7 * 1000);// (Maximal carSpeed)*1000
                    let sessionTimer = setTimeout(function timeCount() {
                        document.getElementById("blueButton").style.display = "none";
                        document.getElementById("redButton").style.display = "none";
                        clearInterval(sessionInterval);
                        clearTimeout(sessionTimer);
                        resolve("doneDayFour");
                        reset_airplane();
                    }, 900000);
                };
                startIntervalDevtest();
                msCount();
            };
        };
    })
};