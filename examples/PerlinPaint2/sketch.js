var nx = 0;
var ny = 10000;
var nz = 50000;
var nInc = 0.00125;
var fillColor = 0;

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    noStroke();
    background(0);
    frameRate(10);
}

function draw() {
    for (var i = 0; i < 32; i++) {
        var x = map(noise(nx), 0, 1, -width, 2 * width);
        var y = map(noise(ny), 0, 1, -height, 2 * height);
        var s = map(noise(nz), 0, 1, 5, 150);
        
        fill(0, 8);
        rect(x, y, s * 1.25, s * 1.25);
        // ellipse(x, y, s * 1.25, s * 1.25);
        fill(fillColor);
        rect(x, y, s, s);
        // ellipse(x, y, s, s);

        nx += nInc;
        ny += nInc;
        nz += nInc * 4;
        fillColor = (fillColor + 8) % 256;
    }
}