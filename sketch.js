var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

/*
function preload()
{
	
}
*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	roof = Bodies.rectangle(width/2, 30, width, 80 , {isStatic:true} );
 	World.add(world, roof);


    bob1 = new Bob(280, 450, 30);
    bob2 = new Bob(340, 450, 30);
    bob3 = new Bob(400, 450, 30);
    bob4 = new Bob(460, 450, 30);
    bob5 = new Bob(520, 450, 30);


    rope1 = new Rope(bob1.body, {x: 280, y: 150});
    rope2 = new Rope(bob2.body, {x: 340, y: 150});
    rope3 = new Rope(bob3.body, {x: 400, y: 150});
    rope4 = new Rope(bob4.body, {x: 460, y: 150});
    rope5 = new Rope(bob5.body, {x: 520, y: 150});

	Engine.run(engine);
  
}


function draw() {
    background(0);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rectMode(CENTER);
    rect(roof.position.x, roof.position.y, width, 80);

    drawSprites();
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -80, y: -80 });
        console.log("keyPressed");
    }
}