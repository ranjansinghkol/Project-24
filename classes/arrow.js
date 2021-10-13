class Arrow {
    constructor(x, y) {
        var options = {
            isStatic: true
        };

        this.width = 50;
        this.height = 25;
        this.image = loadImage("assets/arrow.png");
        this.body = Bodies.rectangle(x, y, 50, 25, options);

        World.add(world, this.body);
    }

    shoot(archerAngle) {
        archerAngle += 90;

        var velocity = p5.Vector.fromAngle(archerAngle * (3.14 / 180));

        velocity.mult(0.5);

        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180 / 3.14),
            y: velocity.y * (180 / 3.14)
        });

        Matter.Body.setStatic(this.body, false);
    }

    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}