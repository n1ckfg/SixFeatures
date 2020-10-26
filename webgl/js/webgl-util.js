"use strict";

function createVertexShader(ctx, v) {
    let vs = ctx.createShader(ctx.VERTEX_SHADER);
    ctx.shaderSource(vs, v);
    ctx.compileShader(vs);
    return vs;
}

function createFragmentShader(ctx, f) {
    let fs = ctx.createShader(ctx.FRAGMENT_SHADER);
    ctx.shaderSource(fs, f);
    ctx.compileShader(fs);
    return fs;
}

function createDefaultVertexShader(ctx) {
    let v = `
            uniform vec2 u_resolution;
            attribute vec2 a_position;

            void main(void) {
                vec2 clipspace = a_position / u_resolution * 2.0 - 1.0;
                gl_Position = vec4(clipspace * vec2(1, -1), 0, 1);
            }
            `
    return createVertexShader(ctx, v);
}

function createDefaultFragmentShader(ctx, r, g, b, a) {
    let f = `
            precision mediump float;

            void main(void) {
                gl_FragColor = vec4(${r},${g},${b},${a});
            }
            `  
    return createFragmentShader(ctx, f);
}

function createProgram(ctx, vs, fs) {
    let program = ctx.createProgram();
    ctx.attachShader(program, vs);
    ctx.attachShader(program, fs);
    ctx.linkProgram(program);  	
    
    let linked = ctx.getProgramParameter(program, ctx.LINK_STATUS);
    if (!linked) {
        let error = ctx.getProgramInfoLog(program);
        console.log('Failed to link program: ' + error);
        ctx.deleteProgram(program);
        ctx.deleteShader(fs);
        ctx.deleteShader(vs);
        return null;
    } else {
        return program;
    }
}

function createProgramFromSource(ctx, v, f) {
    let vs = createVertexShader(ctx, v);
    let fs = createFragmentShader(ctx, f);
    return createProgram(ctx, vs, fs);
}

function createDefaultProgram(ctx, r, g, b, a) {
    let vs = createDefaultVertexShader(ctx);
    let fs = createDefaultFragmentShader(ctx, r, g, b, a);
    return createProgram(ctx, vs, fs);
}

function createFragmentProgramFromSource(ctx, f) {
    let vs = createDefaultVertexShader(ctx);
    let fs = createFragmentShader(ctx, f);
    return createProgram(ctx, vs, fs);
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function background(ctx, r, g, b, a) {
    ctx.clearColor(r, g, b, a);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
}

function drawCircle(ctx, program, x, y, s) {
    let circle = { x: x, y: x, r: s/2 };
    let ATTRIBUTES = 2;
    let numFans = 32;
    let degreePerFan = (2 * Math.PI) / numFans;
    let vertexData = [circle.x, circle.y];
    
    for (let i = 0; i <= numFans; i++) {
        let index = ATTRIBUTES * i + 2;  // there are already 2 items in the array
        let angle = degreePerFan * (i+1);
        vertexData[index] = circle.x + Math.cos(angle) * circle.r;
        vertexData[index + 1] = circle.y + Math.sin(angle) * circle.r;
    }

    let vertexDataTyped = new Float32Array(vertexData);

    let buffer = ctx.createBuffer();
    ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
    ctx.bufferData(ctx.ARRAY_BUFFER, vertexDataTyped, ctx.STATIC_DRAW);
    
    let resolutionLocation = ctx.getUniformLocation(program, "u_resolution");
    ctx.uniform2f(resolutionLocation, ctx.canvas.width, ctx.canvas.height);

    let positionLocation = ctx.getAttribLocation(program, "a_position");
    ctx.enableVertexAttribArray(positionLocation);

    ctx.vertexAttribPointer(positionLocation, 2, ctx.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
    ctx.drawArrays(ctx.TRIANGLE_FAN, 0, vertexData.length/ATTRIBUTES);  
}
