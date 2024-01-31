from p5 import *

x = 100
y = 100
s = 50

def setup():
	size(400, 200)

def draw():
	global x, y, s
	background(127)
	ellipse(x, y, s, s)

run()