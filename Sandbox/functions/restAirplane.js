function reset_airplane() { // sets the red car back to its start point
    document.getElementById('airplane').style.animationPlayState = "paused";
    document.getElementById('airplane').style.animationFillMode = "backwards";
    document.getElementById('airplane').style.display = "none"
};
