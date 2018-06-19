// 4. Loop: a rule that repeats some instructions until its conditions are met.

var x = 100;
var y = 100;
var s = 50;
var speed = 5;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(127);

    for (var i=0; i<4; i++) {
        ellipse(x, y + (i * s), s, s);
    }

        x += speed;
  
    if (x > width || x < 0) {
        speed *= -1;
    }
}
