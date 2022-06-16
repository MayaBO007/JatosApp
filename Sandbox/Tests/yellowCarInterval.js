
const correctRedPressYellow = [];
const correctBluePressYellow = [];
const incorrectRedPressYellow = [];
const incorrectBluePressYellow = [];
const redChoiceYellow = [];
const blueChoiceYellow = [];
const yellowChoiceYellow = [];
const allRedPressesYellow = [];
const allBluePressesYellow = [];
const allCorrectFirstPressYellow = [];
const allChoicesYellow = [];
const howManyYellows = [];

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesYellow.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesYellow.push(now);
});

function startIntervalYellow() {
    count = 0;
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
                            correctBluePressYellow.push(now);
                            allCorrectFirstPressYellow.push(now);
                        } else {
                            correctBluePressYellow.push(now);
                        }

                    };

                    setTimeout(() => {
                        reset_blueCar();
                    }, carSpeed * 1000);
                };

            };
        }, 1 * 1000);// (Maximal carSpeed)*1000
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