//let nextClick = null;
//let demoClick = null;

let qClick = null;
async function startFirstDay() {
    return new Promise(resolve => {
        let goOn = async function () {
            let isDone = await startInstructions();
            // document.getElementById("testVar").innerHTML = "before1";
            if (isDone == "done") {
               document.getElementById("ins12").style.display = "inline";
               document.getElementById("demoStart").style.display = "inline";
            //    document.getElementById("testVar").innerHTML = "before";
                document.getElementById("demoStart").onclick = function () {
                    let demoClick = 1;
                    if (demoClick==1){
                        // document.getElementById("testVar").innerHTML = demoClick;
                    document.getElementById("demoStart").style.display = "none";
                    document.getElementById("ins12").style.display = "none";
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
                                qClick=1;
                                if (qClick==1){
                                window.open("./instructions/questions/Multiple-Choice-Quiz-JavaScript-master/index.html");
                                document.getElementById("qPage").style.display = "none";
                                document.getElementById("qStart").style.display = "none";

                                resolve("doneInstructions")
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
    })
}



