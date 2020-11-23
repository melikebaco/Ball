
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld,ground;

var box1,box2,box3;

var ball;

function setup() {
	var canvas = createCanvas(800, 700);
	myEngine = Engine.create();
	myWorld = myEngine.world;

	ball = new Ball(100,600,10,10);

	box1 = new Box(600,600,10,60);
	box2 = new Box(555,600,70,10);
	box3 = new Box(510,600,10,60)


	ground = new Ground(400,height,800,20)

  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(myEngine);
  
  box1.display();
  box2.display();
  box3.display();

  ball.display();

  ground.display();



 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.positon,{x:555,y:600})
	}
}

