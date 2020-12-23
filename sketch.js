var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true, friction: 0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 

	side1 = Bodies.rectangle(290, 610, 20, 100, {isStatic: true})
	side2 = Bodies.rectangle(400, 650, 200, 20, {isStatic: true})
	side3 = Bodies.rectangle(510, 610, 20, 100, {isStatic: true})

	World.add(world, side1)
	World.add(world, side2)
	World.add(world, side3)

	Engine.run(engine);

  
}


function draw() {


 
  background(0);
  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 

  fill(255, 0, 0)
  rect(side1.position.x, side1.position.y, 20, 100)
  rect(side2.position.x, side2.position.y, 200, 20)
  rect(side3.position.x, side3.position.y, 20, 100)


  fill(0, 255, 0)
  rect(270, 200, 10, 200)
  rect(525, 200, 10, 200)
  

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);  
	//packageBody.position.x = helicopterSprite.x

	packageSprite.visible = true
  }


  if(keyCode === LEFT_ARROW){
	helicopterSprite.velocityX = -3;
  }

  if(keyCode === RIGHT_ARROW){
	helicopterSprite.velocityX = 3;
  }
}



