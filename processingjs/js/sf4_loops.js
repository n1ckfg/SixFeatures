"use strict";

function sketch4(p) {

	let x = 100;
	let y = 100;
	let s = 50;
	let speed = 5;

	p.setup = function() {
		p.size(640, 360);
	}

	p.draw = function() {
		p.background(127);

	    for (let i=0; i<4; i++) {
	    	p.ellipse(x, y + (i * s), s, s);
	    }

  		x += speed;
	  
		if (x > p.width || x < 0) {
			speed *= -1;
		}
	}

}
