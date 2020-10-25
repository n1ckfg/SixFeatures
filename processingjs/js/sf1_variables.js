"use strict";

function sketch1(p) {

	p.setup = function() {
		p.size(200, 200);

		let x = 100;
		let y = 100;
		let s = 50;

		p.background(127);
		p.ellipse(x, y, s, s);	
	}

}
