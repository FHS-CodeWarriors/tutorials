var nx = 0;
var ny = 10000;
var nz = 50000;
var nInc = 0.000125;
var fillColor = 0;
var angle = 0;

function setup() {
    createCanvas(900, 900);
    rectMode(CENTER);
    noStroke();
    background(0);
}

function draw() {
    for (var i = 0; i < 64; i++) {
        var x = map(noise(nx), 0, 1, -width * 1.5, 2 * width);
        var y = map(noise(ny), 0, 1, -height, 2 * height);
        var s = map(noise(nz), 0, 1, 5, 150);

        push();
        translate(x, y);
        rotate(angle);
        fill(0, 4);
        rect(0, 0, s * 1.25, s * 1.25);
        colorMode(HSB)
        fill(fillColor, 64, 100);
        rect(0, 0, s, s);
        pop();

        nx += nInc;
        ny += nInc;
        nz += nInc * 4;
        angle += TAU / 500;
        fillColor = (fillColor + 1) % 360;
    }
}