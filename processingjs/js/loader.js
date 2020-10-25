"use strict";

function main() {

	let canvas1 = document.getElementById("canvas1");
	let canvas2 = document.getElementById("canvas2");
	let canvas3 = document.getElementById("canvas3");
	let canvas4 = document.getElementById("canvas4");
	let canvas5 = document.getElementById("canvas5");
	let canvas6 = document.getElementById("canvas6");

	let p_1 = new Processing(canvas1, sketch1);
	let p_2 = new Processing(canvas2, sketch2);
	let p_3 = new Processing(canvas3, sketch3);
	let p_4 = new Processing(canvas4, sketch4);
	let p_5 = new Processing(canvas5, sketch5);
	let p_6 = new Processing(canvas6, sketch6);

}

window.onload = main;