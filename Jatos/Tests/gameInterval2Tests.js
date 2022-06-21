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

        sessionInterval = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (count >= 20) {
                    clearInterval(sessionInterval);
                    setTimeout(startInterval2Tests, 2000);
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

        if (intervalDone[0] != "done1") {
            let sessionTimer = setTimeout(function timeCount() {
                document.getElementById("blueButton").style.display = "none";
                document.getElementById("redButton").style.display = "none";
                clearInterval(sessionInterval);
                clearInterval(sessionTimer);
                resolve("done1");
            }, saveResponsesFirstDay.criterion);
        } else {
            let sessionTimer = setTimeout(function timeCount() {
                document.getElementById("blueButton").style.display = "none";
                document.getElementById("redButton").style.display = "none";
                clearInterval(sessionInterval);
                clearInterval(sessionTimer);
                resolve("done1");
            }, 60000);
        }
    });
};