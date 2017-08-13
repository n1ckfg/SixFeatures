"use strict";

var sketch_1 = function(p) {

	p.setup = function() {
		p.createCanvas(640, 360);
	}

	p.draw = function() {
		p.background(p.random(255));
	}

}

var p5_1 = new p5(sketch_1, "canvas1");