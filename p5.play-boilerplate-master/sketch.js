const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles;
var plinko;
var divisions;
var ground




 
 function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 /* for (let i = 0; i < plinko; i++) {
    plinko = new plinko(50, 600, 50, 50);
  }
  for (let i = 0; i < divisions; i++) {
  divisions = new divisions(10,50,10,100);
  }
  ground = new ground(5,5,480,10);*/
}

function draw() {
  background(255,255,255);  
  drawSprites();
}