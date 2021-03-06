class Box{
    constructor(x,y){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 0.2
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,50,50);
        //console.log(angle);
        pop();
    }
}