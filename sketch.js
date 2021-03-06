const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world, box1, ground, ball, sling;

function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 10);
  /*for(var i = 0; i < 20; i=i+1){
  box[i] = new Box(200+50*i,60+10*i);
  }*/
  ball = new Ball(500, 100, 25);
  sling = new constraint(ball.body, { x: 500, y: 100 });
  box1 = new Box(900, 100);
  box2 = new Box(900, 100);
  box3 = new Box(900, 100);
  box4 = new Box(900, 100);
  box5 = new Box(900, 100);
  box6 = new Box(900, 100);
  box7 = new Box(800, 100);
  box8 = new Box(800, 100);
  box9 = new Box(800, 100);
  box10 = new Box(800, 100);
  box11 = new Box(800, 100);
  box12 = new Box(800, 100);
  box13 = new Box(700, 100);
  box14 = new Box(700, 100);
  box15 = new Box(700, 100);
  box16 = new Box(700, 100);
  box17 = new Box(700, 100);
  box18 = new Box(700, 100);
  box19 = new Box(700, 100);
  box20 = new Box(700, 100);
}

function draw() {
  Engine.update(engine);
  background(0);

  ground.display();
  /*for(var i = 0; i < 20;i++){
  box[i].display();
  }*/
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  ball.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
