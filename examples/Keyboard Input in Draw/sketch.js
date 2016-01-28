var x = 240;
var y = 240;
var tileSize = 20;
var speed = 5;

function setup() {
    createCanvas(500, 500);
    textFont("courier");
    noStroke();
}

function draw() {
    background(180);

    // Detect key presses and move avatar
    if (keyIsDown("W".charCodeAt(0))) {
        y -= speed;
    }
    if (keyIsDown("A".charCodeAt(0))) {
        x -= speed;
    }
    if (keyIsDown("S".charCodeAt(0))) {
        y += speed;
    }
    if (keyIsDown("D".charCodeAt(0))) {
        x += speed;
    }

    // Draw rectangle
    fill(255, 0, 0);
    rect(x, y, tileSize, tileSize);

    // Draw instructions
    fill(0)
    text("W = Up\nA = Left\nS = Down\nD = Right", width - 80, height - 60);
}