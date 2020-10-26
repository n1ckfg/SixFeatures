"use strict";

function p3() {

	let canvas = document.getElementById("canvas3");
	canvas.width = 640;
	canvas.height = 200;
	let ctx = canvas.getContext("2d");

	let x = 100;
	let y = 100;
	let s = 25;
	let speed = 5;

	setInterval(function() {
		ctx.beginPath();
		ctx.fillStyle = "gray";
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

	    ctx.beginPath();
	    ctx.lineWidth = 1;
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.ellipse(x, y, s, s, 0, -Math.PI, Math.PI);
	    ctx.fill();
	    ctx.stroke();

		x += speed;
	  
		if (x > canvas.width || x < 0) {
			speed *= -1;
		}	 
	}, 1/60*1000);

}

p3();