const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1, box2, box3,paper;
var myEngine,myWorld;

function preload()
{
}

function setup() {
	createCanvas(1000,400);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
	box1 = new Box(800,390,100,10);
	box2 = new Box(750,380,10,40);
	box3 = new Box(850,380,10,40);
	paper = new Paper(200,300,25);

//	Engine.run(myEngine);
 
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25})
	}
}

