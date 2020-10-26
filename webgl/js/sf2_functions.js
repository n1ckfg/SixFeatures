"use strict";

function p2() {

	let canvas = document.getElementById("canvas2");
	canvas.width = 200;
	canvas.height = 200;
	let ctx = canvas.getContext("webgl");

	let x = 0;
	let y = 100;
	let s = 50;

	let program1 = createDefaultProgram(ctx, 0, 0, 0, 1);
	let program2 = createDefaultProgram(ctx, 1, 1, 1, 1);

	setInterval(function() {
		background(ctx, 0.5, 0.5, 0.5, 1);
	    drawCircle();
	}, 1/60*1000);

	canvas.addEventListener("click", function() {
		x = 0;
	});

	function drawCircle() {
		ctx.useProgram(program1);
		glCircle(ctx, program1, x, y, s+2);

		ctx.useProgram(program2);
		glCircle(ctx, program2, x, y, s);

	    x += 0.5;
	}

}

p2();