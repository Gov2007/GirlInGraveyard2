var grave, graveImage, graveGroup, gameOver, gameOverImage;
var Girl, GirlImage, GirlImage2;
var sound, sound2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
 

function preload(){
  GirlImage=loadImage("Girl-Standing.png");
  graveImage=loadImage("grave.png");
  GirlImage2=loadAnimation("Girl-Fallen.png");
  gameOverImage=loadImage("GameOver.png");
  sound=loadSound("spooky.wav");
  
}
  
function setup(){
createCanvas(600,600);
  
  Girl = createSprite(200, 200, 50, 50);
  Girl.addImage("girl", GirlImage);
  Girl.addAnimation("fallen", GirlImage2);
  Girl.scale = 0.03;
  
  graveGroup = new Group();
  climberGroup = new Group();
}

function draw() {
  background("black");
  
  if(gameState === PLAY) { 
  
   sound.play();  
    
  if(keyDown("RIGHT_ARROW")) {
    Girl.x = Girl.x + 3;
  }
  
  if(keyDown("LEFT_ARROW")) {
    Girl.x = Girl.x - 3;
  }
  
  Spawngraves();
  
  if(graveGroup.isTouching(Girl)) {
                                                                                  
    gameState = END;
   }  
  }
    
 
 else if(gameState === END) {
    Girl.changeAnimation("fallen",GirlImage2); 
     Girl.velocityY = 0;
        graveGroup.destroyEach();
    gameOver = createSprite(300, 250);
    gameOver.addImage("gameOver", gameOverImage);
    


 }  
  drawSprites();
}
  
function Spawngraves() {
  if(frameCount%240 === 0) {
    var grave = createSprite(200,-50);
    grave.addImage("grave", graveImage);
    grave.scale = 0.3;
    grave.x = Math.round(random(120, 400));
    grave.velocityY = 8;
    grave.lifetime = 800;
    graveGroup.add(grave);
    Girl.depth = grave.depth; 
    Girl.depth += 1;
  }
}

