
class Square extends Shape {

  constructor (x, y, h, w, a) {
    super(x, y, a);
    this.h = h;
    this.w = w;
  }

  show() {
    noStroke();
    fill(255);
    rectMode(CENTER);
    push();
    translate(this.x, this.y);
    rotate(this.a);
    rect(0, 0, this.w, this.h);
    pop();
  }

}
