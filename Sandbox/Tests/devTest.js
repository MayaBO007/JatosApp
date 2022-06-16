
const correctRedPressDevtest = [];
const correctBluePressDevtest = [];
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


function startIntervalDevtest() {
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

                    setTimeout(() => {
                        reset_blueCar();
                    }, carSpeed * 1000);
                };

            };
        }, 1 * 1000);// (Maximal carSpeed)*1000
};

let startClickDev = null;
function startDevTest() {
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