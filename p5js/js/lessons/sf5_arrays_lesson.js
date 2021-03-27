// 5. Array: a variable that can hold more than one piece of data.

let x = [ 100, 100, 100, 100, 100 ];
let y = 100;
let s = 50;
let speed = [ 1, 2, 3, 4, 5 ];

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(127);

    for (let i=0; i<x.length; i++) {
        ellipse(x[i], y + (i * s), s, s);

        x[i] += speed[i];

        if (x[i] > width || x[i] < 0) {
            speed[i] *= -1;
        }  
    }
}

