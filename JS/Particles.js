class Particle {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: false
        }

        this.body = Bodies.circle(x, y,15, options);
    this.radius = 15;
    this.color = color(random(0,255), random(0,255), random(0,255))
    World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}