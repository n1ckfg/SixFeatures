"use strict";

var sketch_6 = function(p) {

	var numDots = 5;
	var dots = [];

	p.setup = function() {
		p.createCanvas(640, 360);

		for (var i=0; i<numDots; i++) {
    		dots[i] = new Dot(100, 100 + (i * 50));
  		}
	}

	p.draw = function() {
		p.background(127);

		for (var i=0; i<dots.length; i++) {
			dots[i].run();
		}
	}

	// ~ ~ ~

	class Dot {

		constructor(_x, _y) {
			this.x = _x;
			this.y = _y;
			this.s = 50;
			this.speed = p.random(1, 5);
			this.spread = 10;

			this.fillOrig = p.color(255);
			this.fillHit = p.color(0, 127, 255);
			this.fillNow = this.fillOrig;
		}

		update() {    
			this.x += this.speed;
	
			if (this.x > p.width || this.x < 0) {
				this.speed *= -1;
				this.y += p.random(1, this.spread) - p.random(1, this.spread);
			}  

			if (this.speed < 0) {
				this.fillNow = this.fillHit;
			} else {
				this.fillNow = this.fillOrig;
			}
		}

		draw() {
			p.fill(this.fillNow);
			p.ellipse(this.x, this.y, this.s, this.s);    
		}

		run() {
			this.update();
			this.draw();
		}

	}

}

var p5_6 = new p5(sketch_6, "canvas6");