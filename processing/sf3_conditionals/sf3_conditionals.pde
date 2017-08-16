float x = 100;
float y = 100;
float s = 50;
float speed = 5;

void setup() {
  size(640, 360);
}

void draw() {
  background(127);
  ellipse(x, y, s, s);
  x += speed;
  
  if (x > width || x < 0) {
    speed *= -1;
  }
}