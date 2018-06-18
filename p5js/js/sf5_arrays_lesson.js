var x = [ 100, 100, 100, 100, 100 ];
var y = 100;
var s = 50;
var speed = [ 1, 2, 3, 4, 5 ];

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(127);

    for (var i=0; i<x.length; i++) {
        ellipse(x[i], y + (i * s), s, s);

        x[i] += speed[i];

        if (x[i] > width || x[i] < 0) {
            speed[i] *= -1;
        }  
    }
}

