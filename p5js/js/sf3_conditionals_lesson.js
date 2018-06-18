var x = 100;
var y = 100;
var s = 50;
var speed = 5;

function setup() {
    createCanvas(640, 200);
}

function draw() {
    background(127);
    ellipse(x, y, s, s);
    x += speed;
  
    if (x > width || x < 0) {
        speed *= -1;
    }
}

