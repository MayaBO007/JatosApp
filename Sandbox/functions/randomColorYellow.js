
function randColorYellow() { // 2 or 1 or 0 - random choice of car color
    const colorArry = [0, 1, 2];
    return colorArry[Math.floor(Math.random() * colorArry.length)];
}