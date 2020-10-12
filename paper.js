var paperimg

class paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        paperimg = loadImage("sprites/paper.png")
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white")
        imageMode(CENTER)
        image(paperimg, pos.x,pos.y)
    }
}
