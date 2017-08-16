"use strict";

var sketch_2 = function(p) {

	var x = 0;
	var y = 100;
	var s = 50;

	p.setup = function() {
	  p.createCanvas(200, 200);
	}

	p.draw = function() {
	  p.background(127);
	  p.ellipse(x, y, s, s);
	  x += 0.5;
	}

}

var p5_2 = new p5(sketch_2, "canvas2");