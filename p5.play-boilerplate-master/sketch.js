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
var score
var turns

 
 function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  createSprite(240,300,480,10);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  var particles = []
  var plinko = []
  var divisions = []
  var score = []
  var turns = 5;
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
  score(440,750);
  text("100 points", 40, 200, 10, 10 )
  text("120 points", 80, 200, 10, 100)
  text("140 points", 120, 200, 10, 10)
  text("160 points", 160, 200, 10, 10)
  text("180 points", 200, 200, 10, 10)
  text("160 points", 240, 200, 10, 10)
  text("140 points", 280, 200, 10, 10)
  text("120 points", 320, 200, 10, 10)
  text("100 points", 360, 200, 10, 10)

  drawSprites();
}