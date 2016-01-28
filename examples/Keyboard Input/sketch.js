var x = 240;
var y = 240;
var tileSize = 20;

function setup() {
    createCanvas(500, 500);
    textAlign(RIGHT, BOTTOM);
    textFont("courier");
    noStroke();
}

function draw() {
    background(180);
    
    // Draw rectangle
    fill(255, 0, 0);
    rect(x, y, tileSize, tileSize);
    
    // Draw instructions
    fill(0)
    text("W = Up   \nA = Left \nS = Down \nD = Right", width - 20, height - 60);
}

function keyPressed() {
    if (key === "A") {
        x -= tileSize;
    } else if (key === "D") {
        x += tileSize;
    } else if (key === "W") {
        y -= tileSize;
    } else if (key === "S") {
        y += tileSize;
    }
};