"use strict";

function p2() {

	let canvas = document.getElementById("canvas2");
	canvas.width = 200;
	canvas.height = 200;
	let ctx = canvas.getContext("2d");

	let x = 0;
	let y = 100;
	let s = 25;

	setInterval(function() {
		ctx.beginPath();
		ctx.fillStyle = "gray";
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

	    drawCircle();

		ctx.beginPath();
	    ctx.fillStyle = "black";
	    ctx.fillText("(click)", 5, canvas.height-5);
	}, 1/60*1000);

	canvas.addEventListener("click", function() {
		x = 0;
	});

	function drawCircle() {
	    ctx.beginPath();
	    ctx.lineWidth = 1;
	    ctx.fillStyle = "white";
	    ctx.strokeStyle = "black";
	    ctx.ellipse(x, y, s, s, 0, -Math.PI, Math.PI);
	    ctx.fill();
	    ctx.stroke();

	    x += 0.5;
	}

}

p2();