
var shapes;

// FPS Counter
var fs;

/*
 * ### Setup function
 */

function setup() {

  createCanvas(600,600);
  background(51);
  angleMode(DEGREES);
  frameRate(30);

  shapes = [];

  shapes.push(new Square(150,150, 100, 100, 20));
  shapes.push(new Square(95, 95, 10, 10, 0));

  // Setup FPS counter
  fs = createP('');
  fs.addClass('num');

}


/*
 * ### Draw function
 */

function draw() {

  // Main Loop
  background(51);

  for (var s in shapes) {
    shapes[s].show();
  }

  // Update FPS counter
  if (frameCount % 10 === 0)
    fs.html( nf( frameRate(), 0, 2 ) );

}
