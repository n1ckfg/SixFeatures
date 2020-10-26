"use strict";

function p4() {

	let canvas = document.getElementById("canvas4");
	canvas.width = 640;
	canvas.height = 360;
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

	    for (let i=0; i<4; i++) {
	    	ctx.beginPath();
		    ctx.lineWidth = 1;
		    ctx.fillStyle = "white";
		    ctx.strokeStyle = "black";
		    ctx.ellipse(x, y + (i * s * 2), s, s, 0, -Math.PI, Math.PI);
		    ctx.fill();
		    ctx.stroke();
	    }

  		x += speed;
	  
		if (x > canvas.width || x < 0) {
			speed *= -1;
		}
	}, 1/60*1000);

}

p4();