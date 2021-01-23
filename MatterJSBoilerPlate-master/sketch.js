
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin,dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}
	

function setup() {
	createCanvas(1800,700)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,680,800,10);

	boxPosition=550;
	 boxY=625;


 	boxleftSprite=createSprite(boxPosition, boxY-90, 20,250);
 	boxleftSprite.shapeColor=color(255,255,255);

 	boxLeftBody = Bodies.rectangle(boxPosition, boxY-90, 20,250 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,255,255);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+200 , boxY-90, 20,250);
 	boxRightSprite.shapeColor=color(255,255,255);

 	boxRightBody = Bodies.rectangle(boxPosition+200 , boxY-90, 20,250 , {isStatic:true} );
	 World.add(world, boxRightBody);
	 
	 dustbin = createSprite(650,545,10,10);
	 dustbin.addImage(dustbinImage);
	 dustbin.scale = 0.8;


	paper1 = new Paper(50,20,65);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  
  ground1.display();
  
  
  drawSprites();
  paper1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:800,y:-800});
	}
}



