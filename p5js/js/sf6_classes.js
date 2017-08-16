"use strict";

var sketch_6 = function(p) {

	var numDots = 10;
	var dots = [];

	p.setup = function() {
		p.createCanvas(640, 360);

		for (var i=0; i<numDots; i++) {
    		dots[i] = new Dot(100, 100);
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
			this.pos = p.createVector(_x, _y);
			this.s = 50;
			this.speed = p.random(1, 5);
			this.target = p.createVector(p.width, p.random(p.height));

			this.fillOrig = p.color(0, 100, 255);
			this.fillHit = p.color(0, 200, 255);
			this.fillNow = this.fillOrig;
		}

		update() {    
    		this.pos.x = p.lerp(this.pos.x, this.target.x, 0.005 * this.speed);
    		this.pos.y = p.lerp(this.pos.y, this.target.y, 0.005 * this.speed);
	
		    if (this.target.x > 0 && this.pos.x > p.width - (this.s/2) || this.target.x < 0 && this.pos.x < -(this.s/2)) {
		    	this.target.x *= -1;
		    	this.target.y = p.random(p.height);
		    }

			if (this.target.x < 0) {
				this.fillNow = this.fillHit;
			} else {
				this.fillNow = this.fillOrig;
			}
		}

		draw() {
			p.fill(this.fillNow);
			p.ellipse(this.pos.x, this.pos.y, this.s, this.s);    
		}

		run() {
			this.update();
			this.draw();
		}

	}

}

var p5_6 = new p5(sketch_6, "canvas6");