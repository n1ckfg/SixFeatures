x = 0
y = 100
s = 50

def setup():
    size(200, 200, P2D)

def draw():
    background(127)
    drawCircle()

def mousePressed():
    global x
    x = 0
    
def drawCircle():
    global x, y, s
    ellipse(x, y, s, s)
    x += 0.5
    