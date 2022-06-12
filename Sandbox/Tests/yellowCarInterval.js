
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
    sessionInterval = setInterval(function carMove() {
        randSpeed();
        let choseCarYellow = randColorYellow();
        reset_redCar();
        reset_blueCar();
        reset_yellowCar();
        if (count >= 15) {
            clearInterval(sessionInterval);
            carNum = prompt("?כמה מכוניות צהובות ספרת", " ");
            howManyYellows.push(carNum);

        } else {
            count++;
            if (choseCarYellow == 0) {
                document.getElementById("redCar").style.display = "inline";
                document.getElementById("redCar").style.animationPlayState = "running";
                document.getElementById("redCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
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
                    };
                };
            } else if (choseCarYellow == 1) {
                blueChoiceYellow.push(now);
                document.getElementById("blueCar").style.display = "inline";
                document.getElementById("blueCar").style.animationPlayState = "running";
                document.getElementById("blueCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
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
                }
            } else {
                document.getElementById("yellowCar").style.display = "inline";
                document.getElementById("yellowCar").style.animationPlayState = "running";
                document.getElementById("yellowCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
            }
        }
    }, choseSpeed.slice(-1) * 1000);
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