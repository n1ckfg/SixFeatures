"use strict";

let sketch_1 = function(p) {

	p.setup = function() {
		p.createCanvas(200, 200);

		let x = 100;
		let y = 100;
		let s = 50;

		p.background(127);
		p.ellipse(x, y, s, s);	
	}

}

let p5_1 = new p5(sketch_1, "canvas1");