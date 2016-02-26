var nx = 0;
var ny = 10000;
var nInc = 0.01;
var fillColor = 0;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
}

function draw() {
    var x = noise(nx) * width;
    var y = noise(ny) * height;
    fill(fillColor, 100, 100);
    ellipse(x, y, 20, 20);
    
    nx += nInc;
    ny += nInc;
    fillColor = (fillColor + 1) % 360;
}