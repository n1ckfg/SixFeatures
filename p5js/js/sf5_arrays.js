"use strict";

var sketch_5 = function(p) {

	var x = [ 100, 100, 100, 100, 100 ];
	var y = 100;
	var s = 50;
	var speed = [ 1, 2, 3, 4, 5 ];

	p.setup = function() {
		p.createCanvas(640, 360);
	}

	p.draw = function() {
		p.background(127);

		for (var i=0; i<x.length; i++) {
			p.ellipse(x[i], y + (i * s), s, s);

			x[i] += speed[i];

			if (x[i] > p.width || x[i] < 0) {
				speed[i] *= -1;
			}  
		}
	}

}

var p5_5 = new p5(sketch_5, "canvas5");