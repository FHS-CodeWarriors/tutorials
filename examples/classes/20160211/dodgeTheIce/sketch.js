var itemSize = 50;
var speed = 5;
var odds = 0.05
var iceCubes = [];
var player = {};
var score = 0;

function setup() {
    createCanvas(500, 500);
    player.y = height - itemSize * 2;
    textSize(50);
}

function draw() {
    background(0);

    // Add ice cubes
    if (random(1) < odds) {
        var cube = {
            x: random(width),
            y: -itemSize
        }

        iceCubes.push(cube);
    }

    // Update odds
    odds += 0.00005;

    // Update cubes
    for (var i = 0; i < iceCubes.length; i++) {
        var cube = iceCubes[i];
        cube.y += speed;
    }

    // Handle ice cube changes
    for (var i = iceCubes.length - 1; i >= 0; i--) {
        var cube = iceCubes[i];
        // Remove cubes if off screen
        if (cube.y > height) {
            iceCubes.splice(i, 1);
        }
        // Handle player / ice cube collision
        else if (detectRectangleIntersection(
                player.x, player.y, itemSize, itemSize,
                cube.x, cube.y, itemSize, itemSize)) {
            iceCubes.splice(i, 1);
            score--;
        }
    }

    // Update player
    player.x = constrain(mouseX, 0, width - itemSize);;

    // Draw player
    push();
    noStroke();
    fill(255, 0, 0);
    rect(player.x, player.y, itemSize, itemSize);
    pop();

    // Draw ice cubes
    push();
    noStroke();
    fill(0, 128, 255);
    for (var i = 0; i < iceCubes.length; i++) {
        var cube = iceCubes[i];
        rect(cube.x, cube.y, itemSize, itemSize);
    }
    pop();
    
    // Display score
    push();
    fill(255);
    text(score, 25, 50);
    pop();
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