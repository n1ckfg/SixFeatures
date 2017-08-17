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