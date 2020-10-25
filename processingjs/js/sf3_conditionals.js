"use strict";

function sketch3(p) {

	let x = 100;
	let y = 100;
	let s = 50;
	let speed = 5;

	p.setup = function() {
		p.size(640, 200);
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
