const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var heli;
heli.velocityX=5;
var pack;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   heli = new Heli(100,200,50,50);
   pack = new Pack(100,200,50,50);
    ground= new Grround(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    pack.depth = heli.depth;
    heli.depth= pack.depth+1;
    heli.velocityX=5;
    pack.velocityY=pack.velocityY+ 0.8;
    if(keyDown(DOWN_ARROW)){
        pack.velocityY=3;
        heli.velocityX=5;
        pack.collide(ground);
    }
    pack.collide(ground);
   // if(keyDown(RIGHT_ARROW)){
        
      //  heli.velocityX=5;
  //  }

    pack.velocityY=pack.velocityY+ 0.8;
    heli.display();
    pack.display();
    ground.display();
}