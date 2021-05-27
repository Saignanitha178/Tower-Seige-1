const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand,ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon,slingshot;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);
  stand = new Ground(200, 25, 400, 15);
 
  //bottom row
  box1 = new Box (330,235,30,40);
  box2 = new Box (360,235,30,40);
  box3 = new Box (390,235,30,40);
  box4 = new Box (420,235,30,40);
  box5 = new Box (450,235,30,40);
  //middle row
  box6 = new Box (360,195,30,40);
  box7 = new Box (390,195,30,40);
  box8 = new Box (420,195,30,40);
  //top row
  box9 = new Box (390,155,30,40);

  polygon = Bodies.polygon(50,200,6,20);
  slingshot = new SlingShot(this.polygon,{x:200, y:50});

}

function draw() {
  background(0,0,0); 

  Engine.update(engine); 
  
  ground.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  slingshot.display();
  
}

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}