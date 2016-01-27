function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
}

function draw() {
    background(180);
    rect(50, mouseY, 25, 100);
}