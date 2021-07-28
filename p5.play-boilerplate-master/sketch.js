const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles;
var plinko;
var divisions;
var ground;
var divisionsHeight=300;



 
 function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  var particles = []
  var plinko = []
  var divisions = []
  for (var k = 0;k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
  } 
  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinkos(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 0; j <= particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k <=divisions.length; k++) {
    divisions[k].display();
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}