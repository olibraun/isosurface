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

function draw() {
  loadPixels();
  manipulation();
  updatePixels();

  blobs.forEach(blob => {
    blob.update();
  });
}

function manipulation() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = 4 * (x + y * width);
      let col = 0;
      blobs.forEach(blob => {
        const xdif = x-blob.pos.x;
        const ydif = y-blob.pos.y;
        const d = xdif*xdif + ydif*ydif;
        const r = blob.r;
        col += (r*r) / d;
      });
      col *= 150;
      set(x,y,color(col,255,255));
    }
  }
}