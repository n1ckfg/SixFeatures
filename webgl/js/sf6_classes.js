"use strict";

function p6() {

	class Dot {

		constructor(_x, _y) {
			this.pos = { x: _x, y: _y };
			this.s = 25;
			this.speed = 1 + (Math.random() * 4);
			this.target = { x: canvas.width, y: Math.random() * canvas.height };

			this.fillOrig = "rgb(0, 100, 255)";
			this.fillHit = "rgb(0, 200, 255)";
			this.fillNow = this.fillOrig;
		}

		update() {    
    		this.pos.x = this.lerp(this.pos.x, this.target.x, 0.005 * this.speed);
    		this.pos.y = this.lerp(this.pos.y, this.target.y, 0.005 * this.speed);
	
		    if ((this.target.x > 0 && this.pos.x > canvas.width - (this.s/2)) || (this.target.x < 0 && this.pos.x < -(this.s/2))) {
		    	this.target.x *= -1;
		    	this.target.y = Math.random() * canvas.height;
		    }

			if (this.target.x < 0) {
				this.fillNow = this.fillHit;
			} else {
				this.fillNow = this.fillOrig;
			}
		}

		draw() {
			ctx.beginPath();
		    ctx.lineWidth = 1;
		    ctx.fillStyle = this.fillNow;
		    ctx.strokeStyle = "black";
		    ctx.ellipse(this.pos.x, this.pos.y, this.s, this.s, 0, -Math.PI, Math.PI);
		    ctx.fill();
		    ctx.stroke();
		}

		run() {
			this.update();
			this.draw();
		}

		lerp (start, end, value){
        	return (1 - value) * start + value * end
    	}

	}

	let canvas = document.getElementById("canvas6");
	canvas.width = 640;
	canvas.height = 360;
	let ctx = canvas.getContext("2d");

	let numDots = 10;
	let dots = [];

	for (let i=0; i<numDots; i++) {
		dots.push(new Dot(100, 100));
	}
	
	setInterval(function() {
		ctx.beginPath();
		ctx.fillStyle = "gray";
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

		for (let i=0; i<dots.length; i++) {
			dots[i].run();
		}
	}, 1/60*1000);

	// ~ ~ ~


}

p6();