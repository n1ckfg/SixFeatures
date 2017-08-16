int numDots = 10;
Dot[] dots = new Dot[numDots];

void setup() {
  size(640, 360, P2D);
  
  for (int i=0; i<dots.length; i++) {
    dots[i] = new Dot(100, 100);
  }
}

void draw() {
  background(127);
  
  for (int i=0; i<dots.length; i++) {
    dots[i].run();
  }
}

// ~ ~ ~ ~

class Dot {

  PVector pos;
  float s = 50;
  float speed;
  PVector target;
  
  color fillOrig = color(0, 100, 255);
  color fillHit = color(0, 200, 255);
  color fillNow = fillOrig;

  Dot(float _x, float _y) {
    pos = new PVector(_x, _y);
    speed = random(1, 5);
    target = new PVector(width, random(height));
  }
  
  void update() {    
    pos.x = lerp(pos.x, target.x, 0.005 * speed);
    pos.y = lerp(pos.y, target.y, 0.005 * speed);
    
    if ((target.x > 0 && pos.x > width - (s/2)) || (target.x < 0 && pos.x < -(s/2))) {
      target.x *= -1;
      target.y = random(height);
    }
      
    if (target.x < 0) {
      fillNow = fillHit;
    } else {
      fillNow = fillOrig;
    }
  }
  
  void draw() {
    fill(fillNow);
    ellipse(pos.x, pos.y, s, s);    
  }
  
  void run() {
    update();
    draw();
  }
  
}