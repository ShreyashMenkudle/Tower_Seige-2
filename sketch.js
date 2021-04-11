const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

var polygon;

var ground1,ground2,ground3;

function preload() {




}

function setup() {
  createCanvas(1200,450);
  engine = Engine.create();
  world = engine.world;
   
  //supporter
  ground1 =new Ground(420,350,250,15);
  ground2 =new Ground(810,245,200,15);
  ground3 =new Ground(600,470,1200,20);

  //Pyramid------------------1
  //level base
  block8 =new Green(330,310,30,40);
  block9 =new Green(360,310,30,40);
  block10 =new Green(390,310,30,40);
  block11 =new Green(420,310,30,40);
  block12 =new Green(450,310,30,40);
  block13 =new Green(480,310,30,40);
  block14 =new Green(510,310,30,40);
  

  //level 3
  block1 =new Cyan(360,270,30,40);
  block2 =new Cyan(390,270,30,40);
  block3 =new Cyan(420,270,30,40);
  block4 =new Cyan(450,270,30,40);
  block5 =new Cyan(480,270,30,40);
  
 

  //level 2
  block15 =new Blue(390,230,30,40);
  block7 =new Blue(420,230,30,40);
  block6 =new Blue(450,230,30,40);

  //level 1
  block16 =new Pink(420,190,30,40);

  //Pyramid--------------------2
  //base level
  block17 =new Green(750,215,30,40);
  block18 =new Green(780,215,30,40);
  block19 =new Green(810,215,30,40);
  block20 =new Green(840,215,30,40);
  block21 =new Green(870,215,30,40);

  //se.cond level
  block22 =new Cyan(780,180,30,40);
  block23 =new Cyan(810,180,30,40);
  block24 =new Cyan(840,180,30,40);

  //top level
  block25 =new Pink(810,150,30,40);

  polygon =new Ball(100,200,30);
   
  Slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw() {
  background("white");  
  Engine.update(engine);
  text(mouseX +',' +mouseY,30,45);

  //Grounds
  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

//gap no worry.

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

//gap no worry.

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  polygon.display();

  Slingshot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  Slingshot.fly();

}

function keyPressed(){
  if (keyCode===32) {
 
   Slingshot.attach(polygon.body);
  }};