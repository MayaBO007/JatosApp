const intervalDone = [];
let timeTwoTests = null;
async function start2tests() {
    return new Promise(resolve => {
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            let startClick1 = 1;
            if (startClick1 == 1) {
                document.getElementById("startButton").style.display = "none";
                msCount();
                let startIntervalTest = async function () {
                    let startSwitch = await startInterval2Tests();
                    if (startSwitch == "done1") {
                        intervalDone.push("done1");
                        setTimeout(() => {
                            document.getElementById("startSwitchTestButton").style.display = "inline";
                        }, 1000)
                        document.getElementById("startSwitchTestButton").onclick = function () {
                            startClickSwitch = 1;
                            if (startClickSwitch == 1) {
                                document.getElementById("startSwitchTestButton").style.display = "none";
                                document.getElementById("redButton").style.display = "inline";
                                document.getElementById("blueButton").style.display = "inline";
                                document.getElementById("redButton").style.left = "81%";
                                document.getElementById("blueButton").style.left = "1%";
                                let startSwitchTest = async function () {
                                    let endSwitch = await startIntervalSwitch();
                                    if (endSwitch == "done2") {
                                        setTimeout(() => {
                                            document.getElementById("startAfterSwitchTestButton").style.display = "inline";
                                        }, 1000)
                                        document.getElementById("startAfterSwitchTestButton").onclick = function () {
                                            let startClickEndSwitch = 1;
                                            if (startClickEndSwitch == 1) {
                                                document.getElementById("blueButton").style.left = "81%";
                                                document.getElementById("redButton").style.left = "1%";
                                                document.getElementById("startAfterSwitchTestButton").style.display = "none";
                                                document.getElementById("redButton").style.display = "inline";
                                                document.getElementById("blueButton").style.display = "inline";
                                                let afterSwitchTest = async function () {
                                                    let afterSwitch = await startInterval2Tests();
                                                    if (afterSwitch == "done1") {
                                                        document.getElementById("startYellowTestButton").style.display = "inline";
                                                        document.getElementById("startYellowTestButton").onclick = function () {
                                                            let startClickYellow = 1;
                                                            if (startClickYellow == 1) {
                                                                document.getElementById("redButton").style.display = "inline";
                                                                document.getElementById("blueButton").style.display = "inline";
                                                                document.getElementById("startYellowTestButton").style.display = "none";
                                                                let startYellow = async function () {
                                                                    let endYellowTest = await startIntervalYellow();
                                                                    if (endYellowTest == "done3") {
                                                                        document.getElementById("endYellowTestButton").style.display = "inline";
                                                                        document.getElementById("endYellowTestButton").onclick = function () {
                                                                            let startClick2 = 1;
                                                                            if (startClick2 == 1) {
                                                                                document.getElementById("redButton").style.display = "inline";
                                                                                document.getElementById("blueButton").style.display = "inline";
                                                                                document.getElementById("startButton").style.display = "none";
                                                                                let endYellow = async function () {
                                                                                    let doneTwoTests = await startInterval2Tests();
                                                                                    if (doneTwoTests == done1) {
                                                                                        resolve("doneDayThree");
                                                                                    }
                                                                                }
                                                                                endYellow();
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                startYellow();
                                                            }

                                                        }
                                                    }
                                                }
                                                afterSwitchTest();
                                            }

                                        }
                                    }
                                }
                                startSwitchTest();
                            }

                        }
                    }
                }
                startIntervalTest();
            }
        }
    })
}