from p5 import *

x = 100
y = 100
s = 50
speed = 5

def setup():
    size(640, 360)

def draw():
    global x, y, s, speed
    background(127)
    
    for i in range(0, 4):
        ellipse(x, y + (i * s), s, s)
    
    x += speed
    
    if x > width or x < 0:
        speed *= -1

run()