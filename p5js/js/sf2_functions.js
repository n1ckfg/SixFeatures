"use strict";

let sketch_2 = function(p) {

	let x = 0;
	let y = 100;
	let s = 50;

	p.setup = function() {
	  p.createCanvas(200, 200);
	}

	p.draw = function() {
	  p.background(127);
	  p.drawCircle();
	  p.text("(click)", 5, p.height-5);
	}

	p.mousePressed = function() {
		x = 0;
	}

	p.drawCircle = function() {
	  p.ellipse(x, y, s, s);
	  x += 0.5;
	}

}

let p5_2 = new p5(sketch_2, "canvas2");