const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground1;
var hammer;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box( 900,320,70,70);
    ground1 = new Ground(600,380,1200,40);
    
    box3=new Box(700,240,70,70);
    box4=new Box(900,240,70,70);
    

    box5=new Box(800,160,70,70);
    

    hammer=new Hammer(100,100)

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();

    box1.display();
    box2.display(); 
    

    box3.display();
    box4.display();
    
    box5.display();
    

    hammer.display();
}