
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1520, 718);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof =new Roof(700,100,200,20);
	bobObject1 =new Bob(620,660,40);
	bobObject2 =new Bob(660,660,40);
	bobObject3 =new Bob(700,660,40);
	bobObject4 =new Bob(740,660,40);
	bobObject5 =new Bob(780,660,40);
	
	rope1 =new Rope(bobObject1.body,roof.body,-80,0)
	rope2 =new Rope(bobObject2.body,roof.body,-40,0)
	rope3 =new Rope(bobObject3.body,roof.body,0,0)
	rope4 =new Rope(bobObject4.body,roof.body,40,0)
	rope5 =new Rope(bobObject5.body,roof.body,80,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 
 
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-75,y:-20});
	}
}

