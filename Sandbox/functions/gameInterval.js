
// const saveResponses = {
//     correctRedPress: correctRedPress,
//     correctBluePress: correctBluePress,
//     incorrectRedPress: incorrectRedPress,
//     incorrectBluePress: incorrectBluePress,
//     redChoice: redChoice,
//     blueChoice: blueChoice,
//     allRedPresses: allRedPresses,
//     allBluePresses: allBluePresses,
//     allCorrectFirstPress: allCorrectFirstPress,
//     allChoices: allChoices
// };

//jatos.submitResultData(saveResponses);
//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y
//let now = null;
function msCount() {
    setInterval(function setTimer() {
        now = now + 10;
    }, 10);
};

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});
carSpeed = 0;
let myDelay = 1;
let thisDelay = 1;
let start = now;


function startInterval() {
    function carMove() {
        if (carSpeed == 0) {
            carSpeed = randSpeedCar();
        }
        else {
            let actual = now - start;
            let intervalSpeed = randSpeedInterval();
            thisDelay = intervalSpeed - (actual - intervalSpeed);
            carSpeed = randSpeedCar();
        }
        let sessionInterval = setTimeout(() => {
            let choseCar = randColor();
            reset_redCar();
            reset_blueCar();
            reset_airplane();
            buttonChoice = 0;
            if (count >= 20) {
                //clearInterval(sessionInterval);
                setTimeout(startInterval, 9000);
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
                };

            }
            start = now;
            carMove();

        }, thisDelay * 1000 + 2);
    };

    carMove();
}


//let startClick = null;
function startTraining() {
    document.getElementById("ins1").style.display = "none";
    document.getElementById("startButton").style.display = "inline";
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    document.getElementById("startButton").onclick = function () {
        startClick = 1;
        if (startClick == 1) {
            document.getElementById("startButton").style.display = "none";
            startInterval();
            startTimer();
            msCount();
        };
    }
}