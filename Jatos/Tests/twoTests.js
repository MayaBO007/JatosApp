let timeTwoTests = null;
function start2tests() {
async function startTimerTwoTests() {
    return new Promise(resolve => {
        let sessionTimer = setInterval(function timeCount() {
            if (timeTwoTests >= 100) {
                document.getElementById("blueButton").style.display = "none";
                document.getElementById("redButton").style.display = "none";
                //clearInterval(sessionTimer);
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
                //clearInterval(sessionTimer);
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
                //clearInterval(sessionTimer);
                clearInterval(sessionInterval);
                resolve("done3");
            } else {
                timeTwoTests++;
            }
        }, 1000);
    });
}




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
                    document.getElementById("startSwitchTestButton").style.display = "inline";
                    document.getElementById("startSwitchTestButton").onclick = function () {
                        startClickSwitch = 1;
                        if (startClickSwitch == 1) {
                            document.getElementById("redButton").style.display = "inline";
                            document.getElementById("blueButton").style.display = "inline";
                            document.getElementById("redButton").style.left = "81%";
                            document.getElementById("blueButton").style.left = "1%";
                            document.getElementById("startSwitchTestButton").style.display = "none";
                            startIntervalSwitch();
                            let endSwitchTest = async function () {
                                let endSwitch = await startSwitchTestTimer()
                                if (endSwitch == "done2") {
                                    document.getElementById("startYellowTestButton").style.display = "inline";
                                    document.getElementById("startYellowTestButton").onclick = function () {
                                        startClickYellow = 1;
                                        if (startClickYellow == 1) {
                                            document.getElementById("redButton").style.display = "inline";
                                            document.getElementById("blueButton").style.display = "inline";
                                            document.getElementById("startYellowTestButton").style.display = "none";
                                            startIntervalYellow();
                                            let startYellow = async function () {
                                                let startYellowTest = await startTimerTwoTests()
                                                if (startYellowTest == "done3") {
                                                    document.getElementById("startButton").style.display = "inline";
                                                    document.getElementById("startButton").onclick = function () {
                                                        startClick = 1;
                                                        if (startClick == 1) {
                                                            document.getElementById("redButton").style.display = "inline";
                                                            document.getElementById("blueButton").style.display = "inline";
                                                            document.getElementById("startButton").style.display = "none";
                                                            startInterval();
                                                            let endYellowTest = async function () {
                                                                let endYellow = await startYellowTestTimer()
                                                                if (endYellow == "done3") {
                                                                    startInterval();
                                                                    startTimerTwoTests();
                                                                }
                                                            }
                                                            endYellowTest();
                                                        }
                                                    }
                                                }
                                            }
                                            startYellow();
                                        }
                                    }
                                }
                            }
                            endSwitchTest();
                        }
                    }
                }
            }
            startSwitchTest();
        }
    }
}
