"use strict";

function p5() {

	let canvas = document.getElementById("canvas5");
	canvas.width = 640;
	canvas.height = 360;
	let ctx = canvas.getContext("webgl");

	let x = [ 100, 100, 100, 100, 100 ];
	let y = 100;
	let s = 50;
	let speed = [ 1, 2, 3, 4, 5 ];

	let program1 = createDefaultProgram(ctx, 0, 0, 0, 1);
	let program2 = createDefaultProgram(ctx, 1, 1, 1, 1);

	setInterval(function() {
		glBackground(ctx, 0.5, 0.5, 0.5, 1);

		for (let i=0; i<x.length; i++) {
			ctx.useProgram(program1);
			glCircle(ctx, program1, x[i], y + (i * s), s+2);

			ctx.useProgram(program2);
			glCircle(ctx, program2, x[i], y + (i * s), s);

			x[i] += speed[i];

			if (x[i] > canvas.width || x[i] < 0) {
				speed[i] *= -1;
			}  
		}
	}, 1/60*1000);

}

p5();