int numDots = 5;
Dot[] dots = new Dot[numDots];

void setup() {
  size(640, 360);
  
  for (int i=0; i<dots.length; i++) {
    dots[i] = new Dot(100, 100 + (i * 50));
  }
}

void draw() {
  background(127);
  
  for (int i=0; i<dots.length; i++) {
    dots[i].run();
  }
}