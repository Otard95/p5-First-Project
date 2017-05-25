
class Square extends Shape {

  constructor (x, y, h, w, a) {
    super(x, y);
    this.h = h;
    this.w = w;
    this.a = a;
  }

  show() {
    noStroke();
    fill(255);
    push();
    translate(this.x, this.y);
    rotate(this.a);
    rect(0, 0, this.w, this.h);
    pop();
  }

}
