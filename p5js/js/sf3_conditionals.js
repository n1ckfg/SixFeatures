"use strict";

var sketch_3 = function(p) {

	var x = 100;
	var y = 100;
	var s = 50;
	var speed = 5;

	p.setup = function() {
		p.createCanvas(640, 200);
	}

	p.draw = function() {
		p.background(127);
		p.ellipse(x, y, s, s);
		x += speed;
	  
		if (x > p.width || x < 0) {
			speed *= -1;
		}
	}

}

var p5_3 = new p5(sketch_3, "canvas3");