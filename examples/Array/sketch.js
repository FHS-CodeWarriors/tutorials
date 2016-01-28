var diameters = [10, 10, 20, 30, 50, 80, 130];

function setup() {
    createCanvas(500, 500);
    noLoop();
}

function draw() {
    background(180);

    var length = diameters.length;
    for (var i = 0; i < length; i++) {
        var d = diameters[i];
        ellipse(i / (length - 1) * width, 250, d, d);
    }
}