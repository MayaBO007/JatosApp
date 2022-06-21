
const correctRedPressSwitch = [];
const correctBluePressSwitch = [];
const incorrectRedPressSwitch = [];
const incorrectBluePressSwitch = [];
const redChoiceSwitch = [];
const blueChoiceSwitch = [];
const allRedPressesSwitch = [];
const allBluePressesSwitch = [];
const allCorrectFirstPressSwitch = [];
const allChoicesSwitch = [];

const saveResponsesSwitch = {
    sub_ID: sub_ID,
    expDay: expDays.length + 1,
    correctRedPressSwitch: correctRedPressSwitch,
    correctBluePressSwitch: correctBluePressSwitch,
    incorrectRedPressSwitch: incorrectRedPressSwitch,
    incorrectBluePressSwitch: incorrectBluePressSwitch,
    redChoiceSwitch: redChoiceSwitch,
    blueChoiceSwitch: blueChoiceSwitch,
    allRedPressesSwitch: allRedPressesSwitch,
    allBluePressesSwitch: allBluePressesSwitch,
    allCorrectFirstPressSwitch: allCorrectFirstPressSwitch,
    allChoicesSwitch: allChoicesSwitch
};

//jatos.submitResultData(saveResponsesSwitch);

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesSwitch.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesSwitch.push(now);
});
//let sessionIntervalSwitch = null;

async function startIntervalSwitch() {
    return new Promise(resolve => {
        count = 0;
        sessionIntervalSwitch = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (count >= 20) {
                    clearInterval(sessionIntervalSwitch);
                    setTimeout(startIntervalSwitch, 2000);
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
                                correctRedPressSwitch.push(now);
                                allCorrectFirstPressSwitch.push(now);
                            } else {
                                correctRedPressSwitch.push(now);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePressSwitch.push(now);
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
                                incorrectRedPressSwitch.push(now);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctBluePressSwitch.push(now);
                                allCorrectFirstPressSwitch.push(now);
                            } else {
                                correctBluePressSwitch.push(now);
                            }

                        };

                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 1000);
                    };

                };
                //   jatos.appendResultData(saveResponsesSwitch);
            }, 0.7 * 1000);// (Maximal carSpeed)*1000

        let sessionTimerSwitch = setTimeout(function timeCountSwitch() {
            document.getElementById("blueButton").style.display = "none";
            document.getElementById("redButton").style.display = "none";
            clearInterval(sessionIntervalSwitch);
            clearInterval(sessionTimerSwitch);
            resolve("done2");
        }, 10000);
    });
};


// let startClickSwitch = null;
// function startSwitchTest() {
//     document.getElementById("redButton").style.display = "inline";
//     document.getElementById("blueButton").style.display = "inline";
//     document.getElementById("gameScreen").style.display = "inline";
//     document.getElementById("redButton").style.left = "81%";
//     document.getElementById("blueButton").style.left = "1%";
//     document.getElementById("startSwitchTestButton").style.display = "inline";
//     document.getElementById("startSwitchTestButton").onclick = function () {
//         startClickSwitch = 1;
//         if (startClickSwitch == 1) {
//             document.getElementById("startSwitchTestButton").style.display = "none";
//             startIntervalSwitch();
//             //msCount();
//         };
//     };
// };