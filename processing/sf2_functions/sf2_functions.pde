float x = 0;
float y = 100;
float s = 50;

void setup() {
  size(200, 200, P2D);
}

void draw() {
  background(127);
  ellipse(x, y, s, s);
  x += 0.5;
}

void mousePressed() {
  x = 0;
}