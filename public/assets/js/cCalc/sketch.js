
var shapes;

// FPS Counter
var fs;

/*
 * ### Setup function
 */

function setup() {

  createCanvas(600,600);
  background(51);

  shapes = [];

  shapes.push(new Shape(100,100));

  // Setup FPS counter
  fs = createP('');
  fs.addClass('num');

}


/*
 * ### Draw function
 */

function draw() {

  // Main Loop


  // Update FPS counter
  if (frameCount % 10 === 0)
    fs.html( nf( frameRate(), 0, 2 ) );

}
