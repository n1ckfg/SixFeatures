class Dot {

  float x = 100;
  float y = 100;
  float s = 50;
  float speed = 5;

  Dot(float _x, float _y) {
    x = _x;
    y = _y;
  }
  
  void update() {    
    x += speed;
    
    if (x > width || x < 0) {
      speed *= -1;
    }  
  }
  
  void draw() {
    ellipse(x, y, s, s);    
  }
  
  void run() {
    update();
    draw();
  }
  
}