// 4. Loop: a rule that repeats some instructions until its conditions are met.

let x = 100;
let y = 100;
let s = 50;
let speed = 5;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(127);

    for (let i=0; i<4; i++) {
        ellipse(x, y + (i * s), s, s);
    }

        x += speed;
  
    if (x > width || x < 0) {
        speed *= -1;
    }
}
