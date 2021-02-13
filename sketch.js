const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  console.log(ball)
  box=new Box(400,200,50,75)
  ground=new Ground()
  box2=new Box(420,100,75,50)
}

function draw() {
  background("black");  
  Engine.update(engine)
  box.display()
  ground.display()
  box2.display()
}


