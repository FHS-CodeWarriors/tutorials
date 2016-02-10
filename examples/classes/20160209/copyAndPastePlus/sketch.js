var playerX;
var playerY;
var projectiles = [];
var projectileSpeed = 10;
var tilesPerRow = 10;
var numberOfRows = 4;
var tileSize = 20;
var tileSpacer = 10;
var tiles = [];
var tilesVelocity = 5;

function setup() {
    createCanvas(500, 500);
    playerY = height - 50;
    createTiles();
}

function draw() {
    background(0);

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
    for (var i = 0; i < tiles.length; i++) {
        var t = tiles[i];
        t.x += tilesVelocity;
    }


    var switchDirection = false;
    for (var i = 0; i < tiles.length; i++) {
        var t = tiles[i];
        if (t.x + tileSize >= width - 1 || t.x < 0) {
            switchDirection = true;
            break;
        }
    }

    if (switchDirection) {
        tilesVelocity *= -1;
        for (var i = 0; i < tiles.length; i++) {
            var t = tiles[i];
            t.x += tilesVelocity;
            t.y += abs(tilesVelocity * 5);
        }
    }

    if (tiles.length === 0) {
        createTiles();
    }

    // Display tiles
    push();
    fill(255);
    stroke(0);
    for (var i = 0; i < tiles.length; i++) {
        var t = tiles[i];
        rect(t.x, t.y, tileSize, tileSize);
    }
    pop();

    // Display projectiles
    push();
    stroke(255);
    strokeWeight(3);
    for (var i = 0; i < projectiles.length; i++) {
        var p = projectiles[i];
        line(p.x, p.y, p.x, p.y + projectileSpeed);
    }
    pop();

    // Display player
    push();
    rectMode(CENTER);
    fill(255);
    stroke(32);
    rect(playerX, playerY, 25, 25);
    pop();
}

function keyTyped() {
    // Fire projectile
    projectiles.push(createVector(playerX, playerY));
}

function createTiles() {
    tilesVelocity = 5;
    // Create tiles
    for (var y = 0; y < numberOfRows; y++) {
        for (var x = 0; x < tilesPerRow; x++) {
            tiles.push(createVector(x * (tileSize + tileSpacer), y * (tileSize + tileSpacer)));
        }
    }
}