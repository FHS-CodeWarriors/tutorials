var nx = 0;
var ny = 10000;
var nz = 50000;
var nc = 20000;
var na = 30000;
var nInc = 0.00125;
var fillColor = 0;
var angle = 0;

function setup() {
    createCanvas(900, 900);
    rectMode(CENTER);
    noStroke();
    background(0);
    // frameRate(30);
}

function draw() {
    for (var i = 0; i < 4; i++) {
        var x = noise(nx) * width;
        var y = noise(ny) * height;
        var s = map(noise(nz), 0, 1, 5, 150);
        
        push();
        translate(x, y);
        rotate(noise(na) * TAU * 4);
        fill(0, 16);
        rect(0, 0, s * 1.125, s * 1.125);
        fill(noise(nc) * 256);
        rect(0, 0, s, s);
        pop();
        
        nx += nInc;
        ny += nInc;
        nz += nInc * 4;
        nc += nInc * 4;
        na += nInc * 1;
        fillColor = (fillColor + 1) % 360;
    }
}