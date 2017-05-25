
var centre, cursorPos;

/*
 * ### Setup function
 */

function setup() {

  createCanvas(600,600);
  background(51);
  angleMode(DEGREES);
  frameRate(24);

  center = createVector(width/2, height/2);

}


/*
 * ### Draw function
 */

function draw() {

  // #
  // ### CALC everything
  // #

  // Get cursorPos position
  cursorPos = createVector(mouseX, mouseY);

  // Find cursorPos relatve to center
  var v = cursorPos.copy().sub(center);

  // Calc hypotenuse
  var h = dist(center.x, center.y, cursorPos.x, cursorPos.y);

  // get the angles
  var defatan = Math.atan(v.y/v.x) * 180 / Math.PI;
  var defatan2 = Math.atan2(v.y, v.x) * 180 / Math.PI;
  var p5atan = atan(v.y/v.x);
  var p5atan2 = atan2(v.y, v.x);

  // #
  // ### DRAW everything
  // #

  // Clear all
  background(51);

  // Draw line from center to cursor
  noFill();
  stroke(50, 170, 170);
  strokeWeight(4);
  line(center.x, center.y, cursorPos.x, cursorPos.y);
  // Add display h on center og line
  push();
  noStroke();
  fill(50, 170, 170);
  translate( (center.x+cursorPos.x) / 2, (center.y+cursorPos.y) / 2 );
  rotate( atan2(cursorPos.y - center.y, cursorPos.x - center.x) );
  text(nfc(h,1,1), 0, -5);
  pop();

  // Draw center circle
  noStroke();
  fill(255);
  ellipse(center.x, center.y, 80, 80);

  // Print text in center circle
  textAlign(CENTER);
  noStroke();
  fill(0);
  // Print x, y
  text('X: ' + Math.round(v.x), center.x, center.y + 20);
  text('Y: ' + Math.round(v.y), center.x, center.y + 30);
  // print angle from both default js and p5
  text( nf(defatan, 3, 1), center.x, center.y - 25);
  text( nf(defatan2,3, 1), center.x, center.y - 15);
  text( nf(p5atan, 3, 1), center.x, center.y - 5);
  text( nf(p5atan2, 3, 1), center.x, center.y + 5);

}
