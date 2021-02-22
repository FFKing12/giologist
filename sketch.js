const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var pig1,pig3;
var log1,log3,log4,log5;
var box3;
var box4,box5;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(810,350);
    pig3 = new pig(810,220);
    log1 = new log(810,260,300,PI/2);
    log3 = new log(810,180,300,PI/2);
    log4 = new log(760,120,150,PI/7);
    log5 = new log(870,120,150,PI/7);
    bird = new rock(100,100);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig3.display();
    log1.display();
    log3.display();
    log4.display();
    log5.display();
    bird.display();
}