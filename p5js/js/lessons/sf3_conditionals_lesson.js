// 3. Conditional: a rule that ignores some instructions unless its conditions are met.

let x = 100;
let y = 100;
let s = 50;
let speed = 5;

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

