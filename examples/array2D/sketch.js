/*
A mulit-dimensional is an array that stores other arrays or arrays
of arrays. In this example, x-y coordinate pairs are organized as
2-element arrays. The 2-element array pairs are stored inside an
array, forming a 2D array.
*/

var positions = [
    [50, 50],
    [50, 450],
    [250, 250],
    [450, 50],
    [450, 450]
];

function setup() {
    createCanvas(500, 500);
    noLoop();
}

function draw() {
    background(180);

    var length = positions.length;
    for (var i = 0; i < length; i++) {
        var p = positions[i];
        ellipse(p[0], p[1], 50, 50);
    }
}