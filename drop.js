class Drop{

        constructor(x,y) {

        var Options= {
            
            restitution:5,
            friction:0.1,
            density:0.8,
            isStatic:true
    }

            this.body=Bodies.circle(x,y,10,Options)
            this.radius=10;
            World.add(world,this.body)
    }

    display(){
            push()
            translate(this.body.position.x,this.body.position.y)
            angleMode(RADIANS)
            rotate(this.body.angle)
            fill("blue")
            ellipseMode(CENTER)
            ellipse(0,0,10,10)
            pop()
    }

}