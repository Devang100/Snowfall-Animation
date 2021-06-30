const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var boy,boyImg
var snow = [];

function preload(){
  bg = loadImage("snow1.jpg");
  boyImg = loadImage("boy.png");
}

function setup() {
  createCanvas(800,400);
  boy =  createSprite(320, 230, 50, 50);
  boy.addImage("happy", boyImg);
  boy.scale = 0.4;

  

}

function draw() {
  background(bg);  
  drawSprites();


  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-10,width/2-10),10,10));
  }


  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }
}