const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;

function preload() {
   bg1 = loadImage("snow3.jpg")
   //bg2 = loadImage("cornflakes.png") 
}




function setup() {
  createCanvas(800,700);
  engine=Engine.create()
  world=engine.world;

  
 

  flake1=new Snow(100,50,20,40)
  flake2=new Snow(20,30,100,30);
  flake3=new Snow(45,56,50,50)
  flake4=new Snow(35,56,100,40)
  flake5=new Snow(300,80,50,100)
  flake6=new Snow(300,40,20,50);
  flake7 = new Snow(500,10,40,60)
  flake8 = new Snow(600,40,30,50)
  flake9 = new Snow(700,60,50,40)
  flake10=new Snow(100,20,30,40)
}

function draw() {
  background(bg1);  
  Engine.update(engine)
  

  flake1.display()
  flake2.display()
  flake3.display()
  flake4.display()
  flake5.display()
  flake6.display()
  flake7.display()
  flake8.display()
  flake9.display()
  flake10.display()
  drawSprites();
}