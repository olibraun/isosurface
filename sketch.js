let blobs;
const numberOfBlobs = 5;

function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
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
    //blob.show();
  });

  function manipulation() {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = 4 * (x + y * width);
        let col = 0;
        blobs.forEach(blob => {
          const xdif = x-blob.pos.x;
          const ydif = y-blob.pos.y;
          const d = sqrt(xdif*xdif + ydif*ydif);
          col += 150 * blob.r / d;
        });
        set(x,y,color(col,255,255));
        // pixels[index + 0] = col;
        // pixels[index + 1] = col;
        // pixels[index + 2] = col;
        // pixels[index + 3] = 255;
      }
    }
  }
}