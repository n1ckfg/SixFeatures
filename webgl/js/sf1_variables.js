"use strict";


let canvas = document.getElementById("canvas1");
canvas.width = 200;
canvas.height = 200;
let ctx = canvas.getContext("webgl");

background(ctx, 0.15, 0.5, 0.5, 1);

let x = 100;
let y = 100;
let s = 50;

let program1 = createDefaultProgram(ctx, 0, 0, 0, 1);
let program2 = createDefaultProgram(ctx, 1, 1, 1, 1);

ctx.useProgram(program1);
drawCircle(ctx, program1, x, y, s+2);

ctx.useProgram(program2);
drawCircle(ctx, program2, x, y, s);