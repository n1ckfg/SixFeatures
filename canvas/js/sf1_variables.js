"use strict";

function p1() {

	let canvas = document.getElementById("canvas1");
	canvas.width = 200;
	canvas.height = 200;
	let ctx = canvas.getContext("2d");
	
	let x = 100;
	let y = 100;
	let s = 25;

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
    
}

p1();