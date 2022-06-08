import reset_blueCar from "../functions/restBlue.js";
import reset_redCar from "../functions/restRed.js";
//import randColorYellow from "../functions/randomColorYellow.js";
import reset_yellowCar from "../functions/restYellow.js";

const correctRedPressYellow = [];
const correctBluePressYellow = [];
export { correctRedPressYellow, correctBluePressYellow };
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

let now = null;
// Time count function:
function msCount() {
    setInterval(function setTimer() {
        now = now + 10;
    }, 10);
};

// Random choice of car color
function randColorYellow() {
    const colorArry = [0, 1, 2];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        redChoiceYellow.push(now);
        allChoicesYellow.push(now);
    } else if (car == 1) {
        blueChoiceYellow.push(now)
    } else {
        yellowChoiceYellow.push(now)
    }
    allChoicesYellow.push(now);
    return car
};

let count = 0; // counter for iterations
// 1=red, 2=blue
let buttonChoice = null;
let sessionInterval = null;
let carNum = null;

function startIntervalYellow() {
    sessionInterval = setInterval(function carMove() {
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
            }
        }
    }, 1000);
};

let startClickYellow = null;
export default function startYellowTest() {
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    document.getElementById("startYellowTestButton").style.display = "inline";
    document.getElementById("startYellowTestButton").onclick = function () {
        startClickYellow = 1;
        if (startClickYellow == 1) {
            document.getElementById("startYellowTestButton").style.display = "none";
            startIntervalYellow();
            msCount();
        };
    };
};