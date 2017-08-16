x = 0
y = 100
s = 50

def setup():
    size(200, 200, P2D)

def draw():
    global x, y, s
    background(127)
    ellipse(x, y, s, s)
    x += 0.5

def mousePressed():
    global x
    x = 0