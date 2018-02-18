class Blob {
  constructor(x, y) {
    this.pos = {x: x, y: y};
    this.vel = {x: random(2,5), y: random(2,5)};
    this.r = 30;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
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