class divisions{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.bodies=bodies.rectangle(x, y, w, h, options);
        this.w=w;
        this.h=h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(center);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};