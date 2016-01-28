var shipX = 250;
var shipY = 400;
var projectiles = [];
var projectileSpeed = 10;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(180);

    // Update projectiles
    for (var i = projectiles.length - 1; i >= 0; i--) {
        // Get this project from projectiles container
        var p = projectiles[i];
        
        // Move this projectile
        p.y -= projectileSpeed;
        
        // Remove this projectile if it is off the screen
        if (p.y < -projectileSpeed) {
            projectiles.splice(i, 1);
        }
    }

    // Display projectiles
    for (var i = 0; i < projectiles.length; i++) {
        var p = projectiles[i];
        line(p.x, p.y, p.x, p.y + projectileSpeed);
    }

    // Display ship
    triangle(shipX, shipY, shipX - 20, shipY + 40, shipX + 20, shipY + 40)
}

function keyTyped() {
    // Fire projectile
    projectiles.push(createVector(shipX, shipY));
}