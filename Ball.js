class Ball {
  constructor(x, y, r) {
    var options = {
      density: 1,
      friction: 0.5,
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);
  }
  display() {
    push();
    var pos = this.body.position;
    translate(pos.x, pos.y);
    fill(200, 100, 200);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
