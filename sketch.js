const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var raindrops = [];
var img;
var walkingFrame, man;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var rand;
var thunderCreatedFrame = 0;


function preload() {
  walkingFrame = loadAnimation(
    "walking_8.png",
    "walking_7.png",
    "walking_6.png",
    "walking_5.png",
    "walking_4.png",
    "walking_3.png",
    "walking_2.png",
    "walking_1.png"
  );
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");
}


function setup() {
  createCanvas(400, 500);
  man = createSprite(200, 410, 20, 20);
  man.addAnimation("walking", walkingFrame);
  man.scale = 0.25;

  engine = Engine.create();
    world = engine.world;
}


function draw() {
  background(0);

  rand = Math.round(random(1, 4));
  if (frameCount % 80 === 0) {
    thunderCreatedFrame = frameCount;
    Thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    switch (rand) {
      case 1:
        Thunder.addImage(thunder1);
        break;
      case 2:
        Thunder.addImage(thunder2);
        break;
      case 3:
        Thunder.addImage(thunder3);
        break;
      case 4:
        Thunder.addImage(thunder4);
        break;
      default:
        break;
    }
    Thunder.scale = 0.7;
  }

  if (thunderCreatedFrame + 10 === frameCount && Thunder) {
    Thunder.destroy();
  }

  img = new Umbrella(displayWidth/2,500);
  if(frameCount % 1 === 0){
    var raindrop = new Drop(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  img.display();

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(20);
    raindrops[i].display();
    
  } 
  drawSprites();
}


