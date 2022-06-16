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

const d = new Date();

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
ms = checkTime(ms);
let startTime = h + ":" + m + ":" + s + ":" + ms;

let day = d.getDate();
let month = 1 + d.getMonth();
let year = d.getFullYear();
day = checkTime(day);
month = checkTime(month);
const startDate = day + ':' + month + ":" + year;
console.log(startDate + ' ' + startTime);

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};

//const allChoicesSliced = allChoices.slice(0, 20);
// missed = choices - correct X - incorrect Y

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});


// let binaryPress = [];
// // Time count function:
// function msCount() {
//     setInterval(function setTimer() {
//         now = now + 10;
//         if (now >= 10000) {
//             let zeroArray = new Array(allChoices.length - allCorrectFirstPress.length).fill(0);
//             let oneArray = new Array(allCorrectFirstPress.length).fill(1);
//             binaryPress = oneArray.concat(zeroArray);
//             let responses = binaryPress.slice(binaryPress.length - 120, binaryPress.length)
//             if (d3.mean(responses) >= 0.75) {
//                 if (d3.variance(responses) <= 0.000625) {
//                     //stopinterval
//                 }
//             }

//         }
//     }, 10);

//};

let count = 0; // counter for iterations
// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;


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
                                    window.open("functions/questions/Multiple-Choice-Quiz-JavaScript-master/index.html");
                                    document.getElementById("qPage").style.display = "none";
                                    document.getElementById("qStart").style.display = "none";
                                    document.getElementById("ins12").style.display = "inline";
                                    document.getElementById("startAfterInstructions").style.display = "inline";
                                    document.getElementById("startAfterInstructions").onclick = function () {
                                        let startGame = 1;
                                        if (startGame == 1) {
                                            document.getElementById("ins12").style.display = "none";
                                            document.getElementById("startAfterInstructions").style.display = "none";
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
                                                }
                                            }
                                        }
                                        else {
                                            setTimeout(startInterval(), 900000);
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
                                                }
                                            }
                                        }

                                    }

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
