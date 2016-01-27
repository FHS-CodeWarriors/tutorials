var balls = [];
var nBalls = 32;

function setup() {
    createCanvas(500, 500);

    for (var i = 0; i < nBalls; i++) {
        var position = createVector(width / 2, height / 2);
        var velocity = p5.Vector.fromAngle(i / nBalls * TAU);
        var ball = new BounceBall(position, velocity);
        balls.push(ball);
    }
}

function draw() {
    background(180);

    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];
        ball.update();
        ball.display();
    }
}

function BounceBall(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 10;
}

BounceBall.prototype.update = function() {
    // Move the ball
    this.position.add(this.velocity);

    // Handle left and right boundary collision
    if (this.position.x < this.radius) {
        this.position.x = this.radius;
        this.velocity.x *= -1;
    } else if (this.position.x >= width - 1 - this.radius) {
        this.position.x = width - 1 - this.radius;
        this.velocity.x *= -1;
    }

    // Handle top and bottom boundary collision
    if (this.position.y < this.radius) {
        this.position.y = this.radius;
        this.velocity.y *= -1;
    } else if (this.position.y >= height - 1 - this.radius) {
        this.position.y = height - 1 - this.radius;
        this.velocity.y *= -1;
    }
}

BounceBall.prototype.display = function() {
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
}