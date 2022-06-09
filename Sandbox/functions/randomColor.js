//import msCount from "./msCountTimer.js";
//import { redChoice, blueChoice } from "./gameInterval.js";

function randColor() { // 1 or 0 - random choice of car color
    const colorArry = [0, 1];
    return colorArry[Math.floor(Math.random() * colorArry.length)]
}