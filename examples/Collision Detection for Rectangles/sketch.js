var r0 = new Rectangle(175, 200, 150, 100)
var r1 = new Rectangle(100, 100, 50, 50);

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
    fill(0);
    if (detectRectangleIntersection(r0, r1)) {
        text("Collision Detected", width / 2, height / 2);
    }
}

// Creates rectangle objects
function Rectangle(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

// Detect interestion / collision
function detectRectangleIntersection(r0, r1) {
    return !(
        r0.x > r1.x + r1.w ||
        r0.x + r0.w < r1.x ||
        r0.y > r1.y + r1.h ||
        r0.y + r0.h < r1.y
    );
}