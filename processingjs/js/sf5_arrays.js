"use strict";

function sketch5(p) {

	let x = [ 100, 100, 100, 100, 100 ];
	let y = 100;
	let s = 50;
	let speed = [ 1, 2, 3, 4, 5 ];

	p.setup = function() {
		p.size(640, 360);
	}

	p.draw = function() {
		p.background(127);

		for (let i=0; i<x.length; i++) {
			p.ellipse(x[i], y + (i * s), s, s);

			x[i] += speed[i];

			if (x[i] > p.width || x[i] < 0) {
				speed[i] *= -1;
			}  
		}
	}

}
