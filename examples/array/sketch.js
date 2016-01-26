var myArray = [10, 10, 20, 30, 50, 80, 130];

function setup() {
    createCanvas(500, 500);
    noLoop();
    stroke(0);
}

function draw() {
    background(180);
    
    var length = myArray.length;
    for (var i = 0; i < length; i++) {
        var diameter = myArray[i];
        print(diameter);
        ellipse(i / (length - 1) * width, 250, diameter, diameter);
    }
}