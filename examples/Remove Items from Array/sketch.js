var tileSize = 100;
var tiles = [];

function setup() {
    createCanvas(500, 500);
    fill(255, 0, 0);

    // Create tiles
    for (var y = 0; y < height; y += tileSize) {
        for (var x = 0; x < width; x += tileSize) {
            tiles.push(createVector(x, y));
        }
    }
}

function draw() {
    background(180);

    // Display tiles
    for (var i = 0; i < tiles.length; i++) {
        var t = tiles[i];

        rect(t.x, t.y, tileSize, tileSize);
    }
}

function mouseClicked() {
    for (var i = tiles.length - 1; i >= 0; i--) {
        var t = tiles[i];

        // If mouse pointer is inside tile then remove tile from array
        if (mouseX >= t.x && mouseX < t.x + tileSize &&
            mouseY >= t.y && mouseY < t.y + tileSize) {
            tiles.splice(i, 1);
        }
    }
}