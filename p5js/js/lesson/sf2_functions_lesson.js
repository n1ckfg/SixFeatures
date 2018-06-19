var x = 0;
var y = 100;
var s = 50;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(127);
    drawCircle();
    text("(click)", 5, height-5);
}

function mousePressed() {
    x = 0;
}

function drawCircle() {
    ellipse(x, y, s, s);
    x += 0.5;
}

