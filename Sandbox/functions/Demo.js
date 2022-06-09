


let redPressDemo = null;
let bluePressDemo = null;
let mistakeDemo = null;

async function demo() {
    return new Promise(resolve => {
        document.getElementById("redCar").style.display = "inline";
        document.getElementById("redCar").style.animationPlayState = "running";
        document.getElementById("redCar").style.animationDuration = "3s"
        document.getElementById("redButton").onclick = function () {
            redPressDemo = 1;
            if (redPressDemo == 1) {
                setTimeout(function () {
                    document.getElementById("redCar").style.display = "none";
                    document.getElementById("blueCar").style.display = "inline";
                    document.getElementById("blueCar").style.animationPlayState = "running";
                    document.getElementById("blueCar").style.animationDuration = "3s"
                }, 2000);
                document.getElementById("blueButton").onclick = function () {
                    bluePressDemo = 1;
                    if (bluePressDemo == 1) {
                        document.getElementById("blueCar").style.display = "none";
                        document.getElementById("airplane").style.display = "inline";
                        document.getElementById("airplane").style.animationPlayState = "running";
                        document.getElementById("airplane").style.animationDuration = "8s"
                        document.getElementById("blueButton").onclick = function () {
                            bluePressDemo = 2;
                            if (bluePressDemo == 2) {
                                document.getElementById("rest").style.display = "inline";
                                setTimeout(() => {
                                    document.getElementById("rest").style.display = "none";
                                }, 2500);
                            }
                        }
                        document.getElementById("redButton").onclick = function () {
                            bluePressDemo = 2;
                            if (bluePressDemo == 2) {
                                document.getElementById("rest").style.display = "inline";
                                setTimeout(() => {
                                    document.getElementById("rest").style.display = "none";
                                }, 2500);
                            }
                        }

                        setTimeout(() => {
                            document.getElementById("airplane").style.display = "none";
                            document.getElementById("rest").style.display = "none";
                            resolve("done");
                        }, 8200);
                    }
                }
                document.getElementById("redButton").onclick = function () {
                    mistakeDemo = 1;
                    if (mistakeDemo == 1 & bluePressDemo == null) {
                        document.getElementById("wrongBlue").style.display = "inline";
                        setTimeout(function () {
                            document.getElementById("wrongBlue").style.display = "none";
                        }, 3000);

                    }
                }
            }
        }

        document.getElementById("blueButton").onclick = function () {
            mistakeDemo = 1;
            if (mistakeDemo == 1) {
                document.getElementById("wrongRed").style.display = "inline";
                setTimeout(function () {
                    document.getElementById("wrongRed").style.display = "none";
                    mistakeDemo = 0;
                }, 3000);

            }
        }
        setTimeout(() => {
            if (redPressDemo == null || bluePressDemo == null) {
                document.getElementById("pressButton").style.display = "inline";
                setTimeout(function () {
                    document.getElementById("pressButton").style.display = "none";
                }, 3000);
            }
        }, 60000);
    })
}
