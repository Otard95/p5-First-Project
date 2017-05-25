/*
 * ### An atempt at creating the equivalent of a java interface
 */


class Shape {

  constructor (x, y, a) {
    this.x = x;
    this.y = y;
    this.a = a;
  }

  show() {
    console.error(new SyntaxError("Unimplemented Method from interface 'Shape'"));
  }

}
