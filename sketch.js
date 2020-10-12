
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//730 614
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	imgs = loadImage("sprites/paper.png")
	imgs2 = loadImage("sprites/dustbingreen.png")

	//Create the Bodies Here.
	right = new dustbin(555,626,20,100)
	down = new dustbin(641, 668, 200, 20)
	left = new dustbin(730,624, 20,100)
	grounds = new dustbin(348, 676,1200,20)

	papers = new paper(64,635,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Matter.Engine.update(engine)
  right.display()
  down.display()
  left.display()
  grounds.display()
  papers.display()
  image(imgs2, 641,558)
  
  drawSprites();
	text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(papers.body,papers.body.position,{x:150, y:-150})
	}
}


