class Plinko{
constructor(x, y) {
    var options = {
        'restitution':1,
        'friction':0,
        
        isStatic: true
    }
    this.body = Bodies.circle(x, y,10, options);
    this.radius = 10;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}