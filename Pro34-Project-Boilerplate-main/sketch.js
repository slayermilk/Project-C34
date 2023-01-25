const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background;
var ball;
var dustbin;

function preload(){
  backgroundImg = loadImage('Images/background blurred.png');
  platformImg = loadImage('Images/Platform.png')
  ballImg = loadImage('Images/BIG BAWLS.png')

}


function setup() {
  createCanvas(800,500);
  

  engine = Engine.create();
  world = engine.world;

  platform1 = new Platform(400, 250, 200, 70);

  ball_options = {
    restitution: 0.02
  }

  ball = Matter.Bodies.circle(250, 50, 30);
  
  
}


function draw() 
{
  background(backgroundImg);
  platform1.show()
  Engine.update(engine);
  
}

