float x = 0;
float y = 100;
float s = 50;

void setup() {
  size(200, 200);
}

void draw() {
  background(127);
  ellipse(x, y, s, s);
  x += 0.5;
}