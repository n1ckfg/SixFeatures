x = [ 100, 100, 100, 100, 100 ]
y = 100
s = 50
speed = [ 1, 2, 3, 4, 5 ]

def setup():
    size(640, 360)

def draw():
    global x, y, s, speed
    background(127)
    
    for i in range(0, len(x)):
        ellipse(x[i], y + (i * s), s, s)
        
        x[i] += speed[i]
        
        if x[i] > width or x[i] < 0:
            speed[i] *= -1
