"use strict";

function p5() {

	let canvas = document.getElementById("canvas5");
	canvas.width = 640;
	canvas.height = 360;
	let ctx = canvas.getContext("2d");

	let x = [ 100, 100, 100, 100, 100 ];
	let y = 100;
	let s = 25;
	let speed = [ 1, 2, 3, 4, 5 ];

	setInterval(function() {
		ctx.beginPath();
		ctx.fillStyle = "gray";
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

		for (let i=0; i<x.length; i++) {
		    ctx.beginPath();
		    ctx.lineWidth = 1;
		    ctx.fillStyle = "white";
		    ctx.strokeStyle = "black";
			ctx.ellipse(x[i], y + (i * s * 2), s, s, 0, -Math.PI, Math.PI);
		    ctx.fill();
		    ctx.stroke();

			x[i] += speed[i];

			if (x[i] > canvas.width || x[i] < 0) {
				speed[i] *= -1;
			}  
		}
	}, 1/60*1000);

}

p5();