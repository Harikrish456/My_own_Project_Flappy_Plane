var bgImg;
var planeImg;
var player;
var bg;
var obstacleGroup;
var obstacleGroup2;
var gameState = 0;
var skyScraperImg;
var skyScraper2Img;
var reset;

function preload(){
    bgImg = loadImage("images/background.jpg");
    planeImg = loadImage("images/plane.png");  
}

function setup(){
    createCanvas(400,400);

    bg = createSprite(200,200,400,400);
    bg.addImage(bgImg);
    bg.x = bg.width/2;
    bg.velocityX = -3;

    obstacleGroup = createGroup();
    obstacleGroup2 = createGroup();

    player = createSprite(100,200,40,40);
    player.addImage(planeImg);
    player.velocityY = 2;
    player.scale = 0.2;

    reset = createSprite(350,50,30,10);
    reset.visible = false;
}

function draw(){
    background("white");

    if(bg.x < 0 && gameState === 0){
    bg.x = bg.width/2;
    }

    if(keyDown("space") && gameState === 0){
    player.velocityY = -5;
    }

    if(mousePressedOver(reset)){
        gameState = 0;
        reset.visible = false;      
    }

    player.velocityY = player.velocityY + 1;

    addObstacles();
    addObstacles2();

    drawSprites();

    if(player.isTouching(obstacleGroup)||player.isTouching(obstacleGroup2) && gameState === 0){
        gameState = 1;
        player.destroy();
        obstacleGroup.destroyEach();
        obstacleGroup2.destroyEach();
        bg.velocityX = 0;
      }

    if(gameState === 1){
        reset.visible = true;

        textSize(30);
        stroke("red");
        fill("red");
        text("Game Over",130,200);
 
        textSize(13);
        stroke("black");
        fill("yelloe");
        text("Reset",336,63);
    }
}

function addObstacles(){
    if(World.frameCount % 60 === 0 && gameState === 0){
    var obstacle = createSprite(300,random(350,400),70,170);
    obstacle.velocityX = -3;
    obstacleGroup.add(obstacle);
    }
  }
  
  function addObstacles2(){
    if(World.frameCount % 60 === 0 && gameState === 0){
    var obstacle2 = createSprite(300,random(0,50),70,170);
    obstacle2.velocityX = -3;
    obstacleGroup2.add(obstacle2);
    }
  }
  


    
