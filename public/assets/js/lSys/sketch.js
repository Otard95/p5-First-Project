
var axiom = 'F';
var genome = axiom;

var rules = [
  {
    a: 'F',
    b: 'FF-[-F+F+F]+[+F-F-F]'
  }
]

var options = {
  len: 100,
  gen: 1,
  lenMult: 0.6,
  deg: 22
};

/*
 * ### Setup
 */

function setup() {

  // Setup canvas
  createCanvas(600,600);
  background(51);
  translate(0, 0);

  createP(axiom);
  var genBtn = createButton('generate');
  genBtn.mousePressed(evolve);

  options.deg = radians(options.deg);

}

function evolve() {

  var next = "";
  for (var i = 0; i < genome.length; i++) {
    var c = genome.charAt(i);
    for (var r in rules) {
      if (c == rules[r].a) {
        next += rules[r].b;
      } else {
        next += c;
      }
    }
  }

  options.gen++;
  genome = next;
  // createP(genome);

  paint();

}

function paint() {

  resetMatrix();
  background(51);
  stroke(255);
  translate(width/2, height);

  for (var i = 0; i < genome.length; i++) {

    var c = genome.charAt(i);
    var genL = (options.len * Math.pow(options.lenMult, options.gen));

    switch(c) {
      case 'F':
        line(0,0,0,-genL);
        translate(0,-genL );
        break;
      case '+':
        rotate(options.deg);
        break;
      case '-':
        rotate(-options.deg);
        break;
      case '[':
        push();
        break;
      case ']':
        pop();
        break;
    }

  }

}



/*
 * ### Draw
 */

// function draw() {
//
//
//
// }
