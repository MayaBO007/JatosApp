
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

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesSwitch.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesSwitch.push(now);
});

function startIntervalSwitch() {
    count = 0;
    sessionInterval = setInterval(function carMove() {
        randSpeed();
        let choseCar = randColorSwitch();
        reset_redCar();
        reset_blueCar();
        reset_airplane();
        buttonChoice = 0;
        if (count >= 15) {
            clearInterval(sessionInterval);
        } else {
            count++;
            if (choseCar >= 0.5) {
                document.getElementById("redCar").style.display = "inline";
                document.getElementById("redCar").style.animationPlayState = "running";
                document.getElementById("redCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
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
            } else {
                document.getElementById("blueCar").style.display = "inline";
                document.getElementById("blueCar").style.animationPlayState = "running";
                document.getElementById("blueCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
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
            }
        }
    }, choseSpeed.slice(-1) * 1000);
};


let startClickSwitch = null;
function startSwitchTest() {
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    document.getElementById("redButton").style.left = "83%";
    document.getElementById("blueButton").style.left = "10%";
    document.getElementById("startSwitchTestButton").style.display = "inline";
    document.getElementById("startSwitchTestButton").onclick = function () {
        startClickSwitch = 1;
        if (startClickSwitch == 1) {
            document.getElementById("startSwitchTestButton").style.display = "none";
            startIntervalSwitch();
            //msCount();
        };
    };
};