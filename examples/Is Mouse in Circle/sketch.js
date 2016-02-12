var c0 = {x: 250, y: 250, r: 100}

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(180);
    
    // Display circles
    noFill();
    ellipse(c0.x, c0.y, c0.r * 2, c0.r * 2);

    // Display detection status
    fill(255);
    if (isPointInCircle(mouseX, mouseY, c0.x, c0.y, c0.r)) {
        text("Mouse in circle", width / 2, height / 2);
    }
}

function isPointInCircle(px, py, cx, cy, cr) {
    return (dist(px, py, cx, cy) < cr)
}
