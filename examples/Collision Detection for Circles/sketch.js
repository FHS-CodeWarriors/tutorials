var c0 = {x: 250, y: 250, r: 100}
var c1 = {x: 0, y: 0, r: 50}

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(180);
    
    // Update circle 1
    c1.x = mouseX;
    c1.y = mouseY;
    
    // Display circles
    noFill();
    ellipse(c0.x, c0.y, c0.r * 2, c0.r * 2);
    ellipse(c1.x, c1.y, c1.r * 2, c1.r * 2);

    // Display detection status
    fill(255);
    if (detectCircleIntersection(c0.x, c0.y, c0.r, c1.x, c1.y, c1.r)) {
        text("Collision Detected", width / 2, height / 2);
    }
}

// Detect interesection / collision
function detectCircleIntersection(x0, y0, r0, x1, y1, r1) {
    return dist(x0, y0, x1, y1) < r0 + r1;
}