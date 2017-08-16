Dot[] dots = new Dot[5];

void setup() {
  size(640, 360);
  
  for (int i=0; i<dots.length; i++) {
    dots[i] = new Dot(100, 100 + (i * 50));
    dots[i].speed = random(1, 5);
  }
}

void draw() {
  background(127);
  
  for (int i=0; i<dots.length; i++) {
    dots[i].run();
  }
}