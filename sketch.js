
//usamos o namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball_options, ball, ground, ground_options,ballImg;
function preload(){
    ballImg = loadImage("bola.png");
}
function setup() {
    createCanvas(400,400);
    //criamos um mecanismo de física
    engine = Engine.create();
    //criamos um mundo
    world = engine.world;

    ball_options={
        restitution:0.95,
        frictionAir: 0.01
    };

    ground_options={
        isStatic: true
    };

    ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);

    ground = Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);



    rectMode(CENTER);
    ellipseMode(RADIUS);
   
}

function draw() 
{
  background(50);
  Engine.update(engine);
  
  image(ballImg,ball.position.x -20,ball.position.y -19,39,39);
  noFill();
  ellipse(ball.position.x, ball.position.y,20);
  fill("white");
  rect(ground.position.x,ground.position.y,400,20);
}

