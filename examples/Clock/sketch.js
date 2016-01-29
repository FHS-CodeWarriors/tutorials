function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
    strokeCap(SQUARE);
}

function draw() {
    background(180);

    // Center clock
    push();
    translate(width / 2.0, height / 2.0);

    // Draw clock
    fill(255);
    strokeWeight(4);
    ellipse(0, 0, 450, 450);

    // Minute Markers
    fill(0);
    strokeWeight(1);
    for (var i = 0; i < 60; i++) {
        var v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);
        v.mult(210);
        if (i % 5 == 4) {
            ellipse(v.x, v.y, 5, 5);
        } else {
            ellipse(v.x, v.y, 1, 1);
        }
    }

    // Numbers
    textSize(36);
    fill(0);
    noStroke()
    for (var i = 0; i < 12; i++) {
        var v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI);
        v.mult(180);
        text(i + 1, v.x, v.y);
    }

    // p5.js
    fill(212);
    textSize(10);
    text("p5.js", 0, -30);

    // Get time
    date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ms = date.getMilliseconds();

    // Hour hand
    stroke(0);
    strokeWeight(4);
    var t = hours / 12 * TAU + minutes / 60 * TAU / 12 - HALF_PI;
    var v = p5.Vector.fromAngle(t);
    v.mult(120);
    line(0, 0, v.x, v.y);

    // Minute hand
    strokeWeight(2);
    var t = minutes / 60 * TAU + seconds / 60 * TAU / 60 - HALF_PI;
    var v = p5.Vector.fromAngle(t);
    v.mult(205);
    line(0, 0, v.x, v.y);

    // Second hand
    stroke(255, 0, 0);
    strokeWeight(1);
    var t = seconds / 60 * TAU + ms / 1000 * TAU / 60 - HALF_PI;
    var v = p5.Vector.fromAngle(t);
    v.mult(210);
    line(0, 0, v.x, v.y);

    // Center cap
    fill(0);
    stroke(0);
    noStroke();
    ellipse(0, 0, 20, 20);

    pop();
}