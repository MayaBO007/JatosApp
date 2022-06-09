// import reset_airplane from "./restAirplane.js";
// import reset_blueCar from "./restBlue.js";
// import reset_redCar from "./restRed.js";
// //import randColor from "./randomColor.js";
// import startTimer from "./timerPointes.js";

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

const saveResponses = {
    correctRedPress: correctRedPress,
    correctBluePress: correctBluePress,
    incorrectRedPress: incorrectRedPress,
    incorrectBluePress: incorrectBluePress,
    redChoice: redChoice,
    blueChoice: blueChoice,
    allRedPresses: allRedPresses,
    allBluePresses: allBluePresses,
    allCorrectFirstPress: allCorrectFirstPress,
    allChoices: allChoices
};

//jatos.submitResultData(saveResponses);
//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});

//let now = null;
//let binaryPress = null;
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
        blueChoice.push(now);
        allChoices.push(now);
    } else {
        redChoice.push(now);
        allChoices.push(now);
    }
    return car
};

//let count = 0; // counter for iterations
// 1=red, 2=blue buttons
// let buttonChoice = null;
// let sessionInterval = null;

function startInterval() {
    sessionInterval = setInterval(function carMove() {
        let choseCar = randColor();
        reset_redCar();
        reset_blueCar();
        reset_airplane();
        buttonChoice = 0;
        if (count >= 20) {
            clearInterval(sessionInterval);
            setTimeout(startInterval, 9000);
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
    }, 1001);
};

let startClick = null;
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
};
