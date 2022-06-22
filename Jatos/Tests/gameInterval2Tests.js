// const correctRedPress = [];
// const correctBluePress = [];
// const incorrectRedPress = [];
// const incorrectBluePress = [];
// const redChoice = [];
// const blueChoice = [];
// const allRedPresses = [];
// const allBluePresses = [];
// const allCorrectFirstPress = [];
// const allChoices = [];

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});
//let count = 0; // counter for iterations
// 1=red, 2=blue buttons
//let buttonChoice = null;
//let sessionInterval = null;

async function startInterval2Tests() {
    return new Promise(resolve => {

        sessionInterval2Test = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (count >= 20) {
                    clearInterval(sessionInterval2Test);
                    setTimeout(startInterval2Tests, 1000);
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
                //  jatos.appendResultData(saveResponses);
            }, 0.7 * 1000);// (Maximal carSpeed)*1000

        let sessionTimer2test = setTimeout(function timeCount() {
            document.getElementById("blueButton").style.display = "none";
            document.getElementById("redButton").style.display = "none";
            clearInterval(sessionInterval2Test);
            clearInterval(sessionTimer2test);
            resolve("done1");
        }, testsFirstInterval());
    });
};


async function startInterval2Tests2() {
    return new Promise(resolve => {

        sessionInterval2Test2 = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (count >= 20) {
                    clearInterval(sessionInterval2Test2);
                    setTimeout(startInterval2Tests2, 1000);
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
                //  jatos.appendResultData(saveResponses);
            }, 0.7 * 1000);// (Maximal carSpeed)*1000

        let sessionTimer2test2 = setTimeout(function timeCount() {
            clearInterval(sessionInterval2Test2);
            clearInterval(sessionTimer2test2);
            resolve("done4");
        }, 120000);

    });
};

