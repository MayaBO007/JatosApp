const correctRedPress = [];
const correctBluePress = [];
const incorrectRedPress = [];
const incorrectBluePress = [];
const redChoice = [];
const blueChoice = [];
const allRedPresses = [];
const allBluePresses = [];
const allCorrectFirstPress = [];
const allChoices = [];

//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});


let binaryPress = [];
// Time count function:
function msCount() {
    setInterval(function setTimer() {
        now = now + 10;
        if (now >= 10000) {
            let zeroArray = new Array(allChoices.length - allCorrectFirstPress.length).fill(0);
            let oneArray = new Array(allCorrectFirstPress.length).fill(1);
            binaryPress = oneArray.concat(zeroArray);
            let responses = binaryPress.slice(binaryPress.length - 120, binaryPress.length)
            if (d3.mean(responses) >= 0.75) {
                if (d3.variance(responses) <= 0.000625) {
                    //stopinterval
                }
            }

        }
    }, 10);

};

let count = 0; // counter for iterations
// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;

function startInterval() {
    sessionInterval = setInterval(function carMove() {
        randSpeed();
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
                document.getElementById("redCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
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
                document.getElementById("blueCar").style.animationDuration = String(choseSpeed.slice(-1)) + "s";
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
    }, choseSpeed.slice(-1) * 1000);
};
//let nextClick = null;
let demoClick = null;
let qClick = null;
function startFirstDay() {

    let goOn = async function () {
        let isDone = await startInstructions();
        if (isDone == "done") {
            document.getElementById("ins11").style.display = "inline";
            document.getElementById("demoStart").style.display = "inline";
            document.getElementById("demoStart").onclick = function () {
                demoClick = 1;
                if (demoClick == 1) {
                    document.getElementById("demoStart").style.display = "none";
                    document.getElementById("ins11").style.display = "none";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    document.getElementById("gameScreen").style.display = "inline";
                    let goOnTwo = async function () {
                        let demoDone = await demo();
                        if (demoDone == "done") {
                            document.getElementById("redButton").style.display = "none";
                            document.getElementById("blueButton").style.display = "none";
                            document.getElementById("gameScreen").style.display = "none";
                            document.getElementById("qPage").style.display = "inline";
                            document.getElementById("qStart").style.display = "inline";
                            document.getElementById("qStart").onclick = function () {
                                qClick = 1;
                                if (qClick == 1) {
                                    window.open("/questions/Multiple-Choice-Quiz-JavaScript-master/index.html");
                                }
                            }

                        }

                    }
                    goOnTwo();
                }

            }
        }

    }
    goOn();
}
