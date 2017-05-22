/*
 * ### An atempt at creating the equivalent of a java interface
 */


class Shape {

  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    console.error(new SyntaxError("Unimplemented Method from interface 'Shape'"));
  }

}
