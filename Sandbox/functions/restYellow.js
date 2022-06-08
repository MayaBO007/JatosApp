export default function reset_yellowCar() { // sets the red car back to its start point
    document.getElementById('yellowCar').style.animationPlayState = "paused";
    document.getElementById('yellowCar').style.animationFillMode = "initial";
    document.getElementById('yellowCar').style.display = "none"

};
