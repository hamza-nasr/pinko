class divisions{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.bodies=bodies.circle(x, y, this.r,options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(center);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};