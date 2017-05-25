
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

  shapes = [];

  shapes.push(new Square(100,100, 100, 100, 20));
  shapes.push(new Square(90, 90, 10, 10, 0));

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
