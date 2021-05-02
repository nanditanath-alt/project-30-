class Polygon{
    constructor(x,y,r){
        var parameters={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("polygon.png");

        this.body = Bodies.circle(this.x,this.y,this.r/2,parameters);
        World.add(world, this.body);


    }
    display()
    {
        var polyPos = this.body.position;

        push()
			translate(polyPos.x, polyPos.y);
            strokeWeight(0);           
            imageMode(CENTER) 
			ellipseMode(RADIUS)			
            image(this.image, this.body.position.x,this.body.position.y );
            pop()
    }


}