"use strict";

function p3() {

	let canvas = document.getElementById("canvas3");
	canvas.width = 640;
	canvas.height = 200;
	let ctx = canvas.getContext("webgl");

	let x = 100;
	let y = 100;
	let s = 50;
	let speed = 5;

	let program1 = createDefaultProgram(ctx, 0, 0, 0, 1);
	let program2 = createDefaultProgram(ctx, 1, 1, 1, 1);

	setInterval(function() {
		background(ctx, 0.5, 0.5, 0.5, 1);

		ctx.useProgram(program1);
		glCircle(ctx, program1, x, y, s+2);

		ctx.useProgram(program2);
		glCircle(ctx, program2, x, y, s);

		x += speed;
	  
		if (x > canvas.width || x < 0) {
			speed *= -1;
		}	 
	}, 1/60*1000);

}

p3();