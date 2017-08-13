"use strict";

var sketch_5 = function(p) {

	p.setup = function() {
		p.createCanvas(640, 360);
	}

	p.draw = function() {
		p.background(p.random(255));
	}

}

var p5_5 = new p5(sketch_5, "canvas5");