import reset_airplane from "../functions/restAirplane.js";
import reset_blueCar from "../functions/restBlue.js";
import reset_redCar from "../functions/restRed.js";
//import randColor from "../functions/randomColor.js";


const correctRedPressDevtest = [];
const correctBluePressDevtest = [];
export { correctRedPressDevtest, correctBluePressDevtest };
const incorrectRedPressDevtest = [];
const incorrectBluePressDevtest = [];
const redChoiceDev = [];
const blueChoiceDev = [];
const allRedPressesDev = [];
const allBluePressesDev = [];
const allCorrectFirstPressDev = [];
const allChoicesDev = [];

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesDev.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesDev.push(now);
});

let now = null;
// Time count function:
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
        blueChoiceDev.push(now);
    } else {
        redChoiceDev.push(now)
    }
    allChoicesDev.push(now);
    return car
};

let count = 0; // counter for iterations
// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;
function startIntervalDevtest() {
    sessionInterval = setInterval(function carMove() {
        let choseCar = randColor();
        reset_redCar();
        reset_blueCar();
        reset_airplane();
        buttonChoice = 0;
        if (count >= 20) {
            clearInterval(sessionInterval);
            setTimeout(startIntervalDevtest, 9000);
            document.getElementById("airplane").style.display = "inline";
            document.getElementById("airplane").style.animationPlayState = "running";
            count = 0;
        } else {
            count++;
            if (choseCar >= 0.5) {
                document.getElementById("redCar").style.display = "inline";
                document.getElementById("redCar").style.animationPlayState = "running";
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

            } else {
                document.getElementById("blueCar").style.display = "inline";
                document.getElementById("blueCar").style.animationPlayState = "running";
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
            }
        }
    }, 1000);
};

let startClickDev = null;
export default function startDevTest() {
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    document.getElementById("startDevtestButton").style.display = "inline";
    document.getElementById("startDevtestButton").onclick = function () {
        startClickDev = 1;
        if (startClickDev == 1) {
            document.getElementById("startDevtestButton").style.display = "none";
            startIntervalDevtest();
            msCount();
        };
    };
};