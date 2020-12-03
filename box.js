class Box{
    constructor(x,y){
        
        var options={
            isStatic:true,
             friction:1.0,
             density:1
        }

        this.wall1 = Bodies.rectangle(800,390,100,10,options);
        this.wall2 = Bodies.rectangle(820,380,10,40,options);
        this.wall3 = Bodies.rectangle(850,380,10,40,options);
        World.add(myWorld,this.wall1);
        World.add(myWorld,this.wall2);
        World.add(myWorld,this.wall3);
        this.image = loadImage ("dustbingreen.png")
    }

    display(){
        var pos = this.wall2.position;
        push();
        imageMode(CENTER);

        image(this.image,pos.x,pos.y,40,40);
        pop();
    }



}