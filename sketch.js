const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300, 380, width, 20);

    box1 = new Box(300, 200, 30, 30);
    box2 = new Box(300, 170, 30,30);
    box3 = new Box(300, 140, 30,30);
    box4 = new Box(300, 110,30,30);
    box5 = new Box(340, 200, 30, 30);
    box6 = new Box(340, 170, 30,30);
    box7 = new Box(340, 140, 30,30);
    box8 = new Box(340, 110,30,30);
    box9 = new Box(380, 200, 30, 30);
    box10 = new Box(380, 170, 30,30);
    box11 = new Box(380, 140, 30,30);
    box12 = new Box(380, 110,30,30);
    box13 = new Box(420, 110,30,30);
    box14 = new Box(420, 200, 30, 30);
    box15 = new Box(420, 170, 30,30);
    box16 = new Box(420, 140, 30,30);
    box17 = new Box(420, 110,30,30);
    
    ball = new Ball(200, 200, 50,50);

    rope = new Rope(ball.body, {x: 200, y: 20});
}

function draw(){
    background(170);
    Engine.update(engine);

    ground.display();
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

    ball.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}