var r0 = {'x': 175, 'y': 200, 'w': 150, 'h': 100}
var r1 = {'x': 100, 'y': 100, 'w': 50, 'h': 50};

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(180);

    // Update rectangle 1
    r1.x = mouseX;
    r1.y = mouseY;

    // Display rectangles
    noFill();
    rect(r0.x, r0.y, r0.w, r0.h);
    rect(r1.x, r1.y, r1.w, r1.h);

    // Display detection status
    fill(255);
    if (detectRectangleIntersection(r0.x, r0.y, r0.w, r0.h, r1.x, r1.y, r1.w, r1.h)) {
        text("Collision Detected", width / 2, height / 2);
    }
}

// Detect interesection / collision
function detectRectangleIntersection(x0, y0, w0, h0, x1, y1, w1, h1) {
    return !(
        x0 > x1 + w1 ||
        x0 + w0 < x1 ||
        y0 > y1 + h1 ||
        y0 + h0 < y1
    );
}