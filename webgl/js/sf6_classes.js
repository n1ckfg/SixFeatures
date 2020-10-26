"use strict";

function p6() {

	class Dot {

		constructor(ctx, _x, _y) {
			this.pos = { x: _x, y: _y };
			this.s = 50;
			this.speed = 1 + (Math.random() * 4);
			this.target = { x: ctx.canvas.width, y: Math.random() * ctx.canvas.height };
			
			this.programStroke = createDefaultProgram(ctx, 0, 0, 0, 1);
			this.programOrig = createDefaultProgram(ctx, 0, 100/255, 1, 1);
			this.programHit = createDefaultProgram(ctx, 0, 200/255, 1, 1);
			this.programNow = this.programOrig;
		}

		update(ctx, program) {    
    		this.pos.x = this.lerp(this.pos.x, this.target.x, 0.005 * this.speed);
    		this.pos.y = this.lerp(this.pos.y, this.target.y, 0.005 * this.speed);
	
		    if ((this.target.x > 0 && this.pos.x > ctx.canvas.width - (this.s/2)) || (this.target.x < 0 && this.pos.x < -(this.s/2))) {
		    	this.target.x *= -1;
		    	this.target.y = Math.random() * ctx.canvas.height;
		    }

			if (this.target.x < 0) {
				this.programNow = this.programHit;
			} else {
				this.programNow = this.programOrig;
			}
		}

		draw(ctx,) {
			ctx.useProgram(this.programStroke);
		    glCircle(ctx, this.programStroke, this.pos.x, this.pos.y, this.s+2);

			ctx.useProgram(this.programNow);
		    glCircle(ctx, this.programNow, this.pos.x, this.pos.y, this.s);
		}

		run(ctx) {
			this.update(ctx);
			this.draw(ctx);
		}

		lerp (start, end, value){
        	return (1 - value) * start + value * end
    	}

	}

	let canvas = document.getElementById("canvas6");
	canvas.width = 640;
	canvas.height = 360;
	let ctx = canvas.getContext("webgl");

	let numDots = 10;
	let dots = [];

	for (let i=0; i<numDots; i++) {
		dots.push(new Dot(ctx, 100, 100));
	}
	
	setInterval(function() {
		background(ctx, 0.5, 0.5, 0.5, 1);

		for (let i=0; i<dots.length; i++) {
			dots[i].run(ctx);
		}
	}, 1/60*1000);

	// ~ ~ ~


}

p6();