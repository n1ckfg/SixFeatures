"use strict";

var sketch_4 = function(p) {

	var x = 100;
	var y = 100;
	var s = 50;
	var speed = 5;

	p.setup = function() {
		p.createCanvas(640, 360);
	}

	p.draw = function() {
		p.background(127);

	    for (var i=0; i<4; i++) {
	    	p.ellipse(x, y + (i * s), s, s);
	    }

  		x += speed;
	  
		if (x > p.width || x < 0) {
			speed *= -1;
		}
	}

}

var p5_4 = new p5(sketch_4, "canvas4");