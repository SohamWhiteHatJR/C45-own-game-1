const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var PC , pcImg;
var ground;
var  sword , swordAttackImg; 

var boss , bossImg;

function preload(){

pcImg = loadAnimation("images/stickman walk-0.png",
"images/stickman walk-2.png","images/stickman walk-3.png",
"images/stickman walk-4.png","images/stickman walk-7.png",
"images/stickman walk-8.png","images/stickman walk-9.png","images/stickman walk-10.png");


bossImg = loadAnimation("images/boss-0.png","images/boss-1.png","images/boss-2.png","images/boss-3.png",
"images/boss-4.png","images/boss-5.png","images/boss-6.png","images/boss-10.png","images/boss-11.png",
"images/boss-12.png","images/boss-13.png","images/boss-14.png","images/boss-16.png","images/boss-22.png",
"images/boss-23.png","images/boss-24.png","images/boss-25.png","images/boss-27.png","images/boss-28.png",
"images/boss-32.png","images/boss-33.png","images/boss-34.png","images/boss-36.png");

swordAttackImg = loadAnimation("images/a.png","images/b.png");
// "images/sword1-7.png",
// "images/sword1-8.png","images/sword1-9.png","images/sword1-10.png","images/sword1-11.png",
// "images/sword1-12.png","images/sword1-13.png","images/sword1-14.png","images/sword1-15.png","images/sword1-16.png",
// "images/sword1-17.png","images/sword1-18.png","images/sword1-19.png","images/sword1-24.png")
}

function setup(){

    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = createSprite(400,480,1200,7);
    ground.shapeColor = "black"
    ground.velocityX = -2;

    PC = createSprite(100,400);
    PC.addAnimation("moving",pcImg);
   
}

function draw(){
    background(255,255,255);
    Engine.update(engine);

    if (ground.x < 0){
        ground.x = 480
    }
    SwordAttack123();

    Boss();
    
    
    drawSprites();
  //  console.log(frameCount)
}

function Boss(){

if(frameCount%100===0){
boss = createSprite(600,275)
boss.addAnimation("boss",bossImg);
}
}

function SwordAttack123(){
    if(keyCode === 81){
       // PC.changeAnimation("moving",swordAttackImg);
        PC.destroy();
        sword = createSprite(200,100);
        sword.addAnimation("attack",swordAttackImg)
        console.log("abcd")
    }
}