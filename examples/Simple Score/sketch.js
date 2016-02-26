var score = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(180);
    
    // Dispaly Score
    textSize(50);
    text(score, 30, 70);
    
    // Display instructions
    textSize(10);
    text("Click mouse to score points.", 30, 100)  // Worst. Game. Ever.
}

function mouseClicked() {
    score += 100;
}