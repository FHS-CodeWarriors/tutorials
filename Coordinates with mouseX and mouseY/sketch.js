function setup() {
    createCanvas(500, 500);
    textAlign(RIGHT);
    noCursor();
}

function draw() {
    background(180);

    // Draw cross-lines
    line(mouseX, 0, mouseX, height - 1);
    line(0, mouseY, width - 1, mouseY);

    // Display coordinate
    var coordinate = "(" + mouseX + ", " + mouseY + ")";
    text(coordinate, width - 20, height - 20);
}