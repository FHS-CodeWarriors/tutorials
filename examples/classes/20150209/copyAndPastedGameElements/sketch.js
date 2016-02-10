var playerX;
var playerY;
var projectiles = [];
var projectileSpeed = 10;
var tileSize = 50;
var tiles = [];

function setup() {
    createCanvas(500, 500);
    playerY = height - 50;
    createTiles();
}

function draw() {
    background(255);

    // Update player
    playerX = mouseX;

    var projectileHit = false;

    // Update projectiles
    for (var i = projectiles.length - 1; i >= 0; i--) {
        // Get this project from projectiles container
        var p = projectiles[i];

        // Move this projectile
        p.y -= projectileSpeed;

        // Detect tile 
        for (var j = tiles.length - 1; j >= 0; j--) {
            var t = tiles[j];

            if (p.x >= t.x && p.x < t.x + tileSize &&
                p.y >= t.y && p.y < t.y + tileSize) {
                tiles.splice(j, 1);
                projectileHit = true;
            }
        }


        // Remove this projectile if it is off the screen
        if (p.y < -projectileSpeed || projectileHit) {
            projectiles.splice(i, 1);
        }
    }

    // Update tiles
    if (tiles.length === 0) {
        createTiles();
    }

    // Display tiles
    push();
    fill(180, 0, 180);
    noStroke();
    for (var i = 0; i < tiles.length; i++) {
        var t = tiles[i];
        rect(t.x, t.y, tileSize, tileSize);
    }
    pop();

    // Display projectiles
    push();
    stroke(255, 0, 0);
    strokeWeight(3);
    for (var i = 0; i < projectiles.length; i++) {
        var p = projectiles[i];
        line(p.x, p.y, p.x, p.y + projectileSpeed);
    }
    pop();

    // Display player
    push();
    rectMode(CENTER);
    fill(255, 212, 0);
    stroke(32);
    rect(playerX, playerY, 25, 25);
    pop();
}

function keyTyped() {
    // Fire projectile
    projectiles.push(createVector(playerX, playerY));
}

function createTiles() {
    // Create tiles
    for (var y = 0; y < height / 2; y += tileSize) {
        for (var x = 0; x < width; x += tileSize) {
            tiles.push(createVector(x, y));
        }
    }
}