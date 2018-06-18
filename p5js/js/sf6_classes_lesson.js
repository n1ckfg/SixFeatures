var numDots = 10;
var dots = [];

function setup() {
    createCanvas(640, 360);

    for (var i=0; i<numDots; i++) {
        dots[i] = new Dot(100, 100);
    }
}

function draw() {
    background(127);

    for (var i=0; i<dots.length; i++) {
        dots[i].run();
    }
}

// ~ ~ ~

class Dot {

    constructor(_x, _y) {
        this.pos = createVector(_x, _y);
        this.s = 50;
        this.speed = random(1, 5);
        this.target = createVector(width, random(height));

        this.fillOrig = color(0, 100, 255);
        this.fillHit = color(0, 200, 255);
        this.fillNow = this.fillOrig;
    }

    update() {    
        this.pos.x = lerp(this.pos.x, this.target.x, 0.005 * this.speed);
        this.pos.y = lerp(this.pos.y, this.target.y, 0.005 * this.speed);

        if ((this.target.x > 0 && this.pos.x > width - (this.s/2)) || (this.target.x < 0 && this.pos.x < -(this.s/2))) {
            this.target.x *= -1;
            this.target.y = random(height);
        }

        if (this.target.x < 0) {
            this.fillNow = this.fillHit;
        } else {
            this.fillNow = this.fillOrig;
        }
    }

    draw() {
        fill(this.fillNow);
        ellipse(this.pos.x, this.pos.y, this.s, this.s);    
    }

    run() {
        this.update();
        this.draw();
    }

}

