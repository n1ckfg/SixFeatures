from p5 import *

numDots = 10
dots = []

def setup():
    global numDots, dots
    size(640, 360)
    
    for i in range(0, numDots):
        d = Dot(100, 100)
        dots.append(d)

def draw():
    global numDots, dots
    background(127)
    
    for d in dots:
        d.run()

# ~ ~ ~ ~

class Dot:

    def __init__(self, _x, _y):
        self.pos = Vector(_x, _y)
        self.s = 50
        self.speed = random_uniform(1, 5)
        self.target = Vector(width, random_uniform(height))
        self.fillOrig = Color(0, 100, 255)
        self.fillHit = Color(0, 200, 255)
        self.fillNow = self.fillOrig
        
    def update(self):        
        self.pos.x = lerp(self.pos.x, self.target.x, 0.005 * self.speed)
        self.pos.y = lerp(self.pos.y, self.target.y, 0.005 * self.speed)
        
        if (self.target.x > 0 and self.pos.x > width - (self.s/2)) or (self.target.x < 0 and self.pos.x < -(self.s/2)):
            self.target.x *= -1
            self.target.y = random_uniform(height)
            
        if self.target.x < 0:
            self.fillNow = self.fillHit
        else:
            self.fillNow = self.fillOrig
    
    def draw(self):
        fill(self.fillNow)
        ellipse(self.pos.x, self.pos.y, self.s, self.s)        
    
    def run(self):
        self.update()
        self.draw()

run()