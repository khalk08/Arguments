var fixedRect;
var movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  movingRect = createSprite(400,800,80,30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw(){
  background("blue");  
 
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //console.log(movingRect.x-fixedRect.x);

  bounceOff(movingRect, fixedRect);
   
  
  drawSprites();
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2){
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2 
      && object2.y - object2.y < object2.height/2 + object1.height/2) 
      {object1.velocityY = object1.velocityY * (-1); 
       object2.velocityY = object2.velocityY * (-1);}
}

