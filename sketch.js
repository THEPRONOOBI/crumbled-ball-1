
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (50,100,70)
	ground = new Ground(400,720,800,20)

	leftSide = Bodies.rectangle(300,600,20,100);
	World.add(world , leftSide);

	rightSide = Bodies.rectangle(500,600,20,100);
	World.add(world , rightSide);

	bottomSide = Bodies.rectangle(400,640,200,20);
	World.add(world , bottomSide);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  fill("red")
  rect(rightSide.position.x,rightSide.position.y,20,100)
  rect(leftSide.position.x,leftSide.position.y,20,100)
  rect(bottomSide.position.x,bottomSide.position.y,200,20)
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


