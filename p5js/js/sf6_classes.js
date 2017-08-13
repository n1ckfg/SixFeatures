"use strict";

var sketch_6 = function(p) {

	p.setup = function() {
		p.createCanvas(640, 360);
	}

	p.draw = function() {
		p.background(p.random(255));
	}

}

var p5_6 = new p5(sketch_6, "canvas6");