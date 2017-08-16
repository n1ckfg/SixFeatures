class Dot {

  float x = 100;
  float y = 100;
  float s = 50;
  float speed = 5;
  float spread = 10;
  
  color fillOrig = color(255);
  color fillHit = color(0, 127, 255);
  color fillNow = fillOrig;

  Dot(float _x, float _y) {
    x = _x;
    y = _y;
    speed = random(1, 5);
  }
  
  void update() {    
    x += speed;
    
    if (x > width || x < 0) {
      speed *= -1;
      y += random(1, spread) - random(1, spread);
    }
      
    if (speed < 0) {
      fillNow = fillHit;
    } else {
      fillNow = fillOrig;
    }
  }
  
  void draw() {
    fill(fillNow);
    ellipse(x, y, s, s);    
  }
  
  void run() {
    update();
    draw();
  }
  
}