import reset_blueCar from "../functions/restBlue.js";
import reset_redCar from "../functions/restRed.js";
//import randColor from "../functions/randomColor.js";
import reset_airplane from "../functions/restAirplane.js";


const correctRedPressSwitch = [];
const correctBluePressSwitch = [];
export { correctRedPressSwitch, correctBluePressSwitch };
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

let now = null;
// Time functions:
function msCount() {
    setInterval(function setTimer() {
        now = now + 10;
    }, 10);
};

// Random car choise function:
function randColor() {
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoiceSwitch.push(now);
    } else {
        redChoiceSwitch.push(now)
    }
    allChoicesSwitch.push(now);
    return car
};


let count = 0; // counter for iterations
// car choice 0=red, 1=blue
//buton choice 1=red, 2=blue
let buttonChoice = null;
let sessionInterval = null;
function startIntervalSwitch() {
    sessionInterval = setInterval(function carMove() {
        let choseCar = randColor();
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
    }, 1000);
};


let startClickSwitch = null;
export default function startSwitchTest() {
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
            msCount();
        };
    };
};