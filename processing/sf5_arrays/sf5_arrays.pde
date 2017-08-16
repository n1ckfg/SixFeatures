float x[] = { 100, 100, 100, 100, 100 };
float y = 100;
float s = 50;
float[] speed = { 1, 2, 3, 4, 5 };

void setup() {
  size(640, 360, P2D);
}

void draw() {
  background(127);
  
  for (int i=0; i<x.length; i++) {
    ellipse(x[i], y + (i * s), s, s);
    
    x[i] += speed[i];
    
    if (x[i] > width || x[i] < 0) {
      speed[i] *= -1;
    }  
  }
}