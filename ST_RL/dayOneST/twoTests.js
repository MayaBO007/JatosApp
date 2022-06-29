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
                                                document.getElementById("blueButton").style.left = "81%";
                                                document.getElementById("redButton").style.left = "1%";
                                                document.getElementById("startAfterSwitchTestButton").style.display = "none";
                                                document.getElementById("redButton").style.display = "inline";
                                                document.getElementById("blueButton").style.display = "inline";
                                                let afterSwitchTest = async function () {
                                                    let afterSwitch = await startInterval2Tests2();
                                                    if (afterSwitch == "done4") {
                                                        document.getElementById("blueButton").style.display = "none";
                                                        document.getElementById("redButton").style.display = "none";
                                                        document.getElementById("startYellowTestButton").style.display = "inline";
                                                        document.getElementById("startYellowTestButton").onclick = function () {
                                                                document.getElementById("redButton").style.display = "inline";
                                                                document.getElementById("blueButton").style.display = "inline";
                                                                document.getElementById("startYellowTestButton").style.display = "none";
                                                                let startYellow = async function () {
                                                                    let endYellowTest = await startIntervalYellow();
                                                                    if (endYellowTest == "done3") {
                                                                        document.getElementById("blueButton").style.display = "none";
                                                                        document.getElementById("redButton").style.display = "none";
                                                                        document.getElementById("endYellowTestButton").style.display = "inline";
                                                                        document.getElementById("endYellowTestButton").onclick = function () {
                                                                                document.getElementById("endYellowTestButton").style.display = "none";
                                                                                document.getElementById("redButton").style.display = "inline";
                                                                                document.getElementById("blueButton").style.display = "inline";
                                                                                document.getElementById("startButton").style.display = "none";
                                                                                intervalDone.push("done4");
                                                                                let endYellow = async function () {
                                                                                    let doneTwoTests = await startInterval2Tests3();
                                                                                    if (doneTwoTests == "done4") {
                                                                                        resolve("doneDayOneST");
                                                                                    }
                                                                                }
                                                                                endYellow();
                                                                        }
                                                                    }
                                                                }
                                                                startYellow();
                                               }
                                                
                                               }
                                                
                                            }
                                           afterSwitchTest();
                                    }
                                    }
                                }    
                        startSwitchTest();                       

                        }
                    }
                }
                startIntervalTest();
            }
        }
})
        }