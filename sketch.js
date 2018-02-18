let blobs;
const numberOfBlobs = 2;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  blobs = [];
  for(let i=0; i<numberOfBlobs; i++) {
    blobs.push(new Blob(random(width), random(height)));
  }
}

function r(x, y) {
  return map(x+y,0,800,0,255);
}

function g(x, y) {
  return map(x*y,0,400*400,0,255);
}

function b(x, y) {
  return 25;
}

function draw() {
  background(51);
  loadPixels();
  manipulation();
  updatePixels();

  blobs.forEach(blob => {
    blob.update();
    blob.show();
  });

  function manipulation() {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < height; x++) {
        const index = 4 * (x + y * width);
        let col = 0;
        blobs.forEach(blob => {
          const d = dist(x, y, blob.pos.x, blob.pos.y);
          col += 500 * blob.r / d;
        });
        pixels[index + 0] = col;
        pixels[index + 1] = col;
        pixels[index + 2] = col;
        pixels[index + 3] = 255;
      }
    }
  }
}

class Blob {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(2, 5));
    this.r = 30;
  }

  update() {
    this.pos.add(this.vel);
    if(this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;
    }
    if(this.pos.y > height || this.pos.y < 0) {
      this.vel.y *= -1;
    }
  }

  show() {
    noFill();
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}