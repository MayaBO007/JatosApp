let timeTwoTests = null;

async function startTimerTwoTests() {
    return new Promise(resolve => {
        let sessionTimer = setInterval(function timeCount() {
            if (timeTwoTests >= 100) {
                document.getElementById("blueButton").style.display = "none";
                document.getElementById("redButton").style.display = "none";
                clearInterval(sessionTimer);
                clearInterval(sessionInterval);
                resolve("done1");
            } else {
                timeTwoTests++;
            }
        }, 1000);
    });
}

async function startSwitchTestTimer() {
    return new Promise(resolve => {
        let sessionTimer = setInterval(function timeCount() {
            if (timeTwoTests >= 100) {
                document.getElementById("blueButton").style.display = "none";
                document.getElementById("redButton").style.display = "none";
                clearInterval(sessionTimer);
                clearInterval(sessionInterval);
                resolve("done2");
            } else {
                timeTwoTests++;
            }
        }, 1000);
    });
}

async function startYellowTestTimer() {
    return new Promise(resolve => {
        let sessionTimer = setInterval(function timeCount() {
            if (timeTwoTests >= 100) {
                document.getElementById("blueButton").style.display = "none";
                document.getElementById("redButton").style.display = "none";
                clearInterval(sessionTimer);
                clearInterval(sessionInterval);
                resolve("done2");
            } else {
                timeTwoTests++;
            }
        }, 1000);
    });
}



function start2tests() {
    document.getElementById("startButton").style.display = "inline";
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    document.getElementById("startButton").onclick = function () {
        startClick = 1;
        if (startClick == 1) {
            document.getElementById("startButton").style.display = "none";
            startInterval();
            msCount();
            let startSwitchTest = async function () {
                let startSwitch = await startTimerTwoTests();
                if (startSwitch == "done1") {
                    let endSwitchTest = async function () {
                        let endSwitch = await startSwitchTestTimer()
                        if (endSwitch == "done2") {
                            startInterval();
                            let startYellow = async function () {
                                let startYellowTest = await startTimerTwoTests()
                                if (startYellowTest == "done1") {
                                    startIntervalYellow();
                                    let endYellowTest = async function () {
                                        let endYellow = await startYellowTestTimer()
                                        if (endYellow == "done3") {
                                            startInterval();
                                            startTimerTwoTests();
                                        }
                                    }
                                    endYellowTest
                                }
                            }
                            startYellow
                        }
                    }
                    endSwitchTest
                }
            }
            startSwitchTest();
        }
    }
}
