"use strict";

var sketch_1 = function(p) {

	p.setup = function() {
		p.createCanvas(200, 200);

		var x = 100;
		var y = 100;
		var s = 50;

		p.background(127);
		p.ellipse(x, y, s, s);	
	}

}

var p5_1 = new p5(sketch_1, "canvas1");