const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var backgroundIMG;
var returnButtonIMG;
var lockLevelIMG;
var headingIMG;
var buttonIMG;
var levelButtonIMG;
var roofSpikeImage;

var knightWalkingANM;

var Background;
var returnButton;
var introButton;
var playButton;
var creditButton;
var lavaFireball;
var level1,level2,level3,level4,level5;

var gamestate="level4"; 


function preload(){
  backgroundIMG=loadImage("images/backgroundImage.jpg");
  buttonIMG=loadImage("images/buttonImage.png");
  downFacingSpikeIMG=loadImage("images/downFacingSpikeImage.png");
  endingPortalIMG=loadImage("images/endingPortalImage.png");
  groundIMG=loadImage("images/groundImage.png");
  headingIMG=loadImage("images/headingImage.png");
  lavaFireballIMG=loadImage("images/lavaFireballImage.png")
  lavaIMG=loadImage("images/lavaImage.png");
  leftFacingSpikeIMG=loadImage("images/leftFacingSpikeImage.png")
  levelButtonIMG=loadImage("images/levelButtonImage.png");
  lockLevelIMG=loadImage("images/lockImage.png");
  returnButtonIMG=loadImage("images/returnButtonImage.png");
  rightFacingSpikeIMG=loadImage("images/rightFacingSpikeImage.png")
  startingPortalIMG=loadImage("images/startingPortalImage.png");
  upFacingSpikeIMG=loadImage("images/upFacingSpikeImage.png");
  witchFireballIMG=loadImage("images/witchFireballImage.png");

  KnightWalkingANM=loadAnimation( "knightWalking/1.png","knightWalking/2.png","knightWalking/3.png","knightWalking/4.png","knightWalking/5.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;   
 
  Background=createSprite(width/2,height/2,width,height);
  Background.addImage(backgroundIMG);
  Background.scale=1.8;

  returnButton=createSprite(70,70,50,50);
  returnButton.addImage(returnButtonIMG);
  returnButton.scale=0.3;
  
  introButton=createSprite(width/2+75,height/2+250,200,100);
  introButton.addImage(buttonIMG);
  introButton.scale=1.3;
  introButton.setCollider("rectangle",-75,-15,230,110);

  playButton=createSprite(width/2+75,height/2+50,200,100);
  playButton.addImage(buttonIMG);
  playButton.scale=1.3;
  playButton.setCollider("rectangle",-75,-15,230,110);

  creditButton=createSprite(width-70,height-55,100,100);
  creditButton.addImage(buttonIMG);
  creditButton.scale=0.7
  creditButton.setCollider("rectangle",-75,-15,230,110);

  level1=createSprite(width/4-150,height/2-height/8,200,100);
  level1.addImage(levelButtonIMG);
  level1.setCollider("rectangle",-5,-5,125,125);

  level2=createSprite(width/3,height/2+height/8-10,200,100);
  level2.addImage(lockLevelIMG);
  level2.scale=0.7

  level3=createSprite(width/2,height/2-height/8,200,100);
  level3.addImage(lockLevelIMG);
  level3.scale=0.7

  level4=createSprite(width/3+width/3,height/2+height/8-10,200,100);
  level4.addImage(lockLevelIMG);
  level4.scale=0.7

  level5=createSprite(width/4+width/2+150,height/2-height/8,200,100);
  level5.addImage(lockLevelIMG);
  level5.scale=0.7
   
  returnForLevel=createSprite(width-70,70,50,50);
  returnForLevel.addImage(returnButtonIMG);
  returnForLevel.scale=0.3;

  spike1=createSprite(500,715,100,100);
  spike1.addImage(upFacingSpikeIMG);
  spike1.scale=0.2

  spike2=createSprite(1300,715,100,100);
  spike2.addImage(upFacingSpikeIMG);
  spike2.scale=0.2

  spike3=createSprite(900,450,100,100);
  spike3.addImage(downFacingSpikeIMG);
  spike3.scale=0.6


  knight = new Knight(100,600,50,50);

  // In level 1
  ground1 = new Ground(width/2,1000,width+1000,500);
  ground2 = new Ground(width/2,100,width,500);
  // In level 2 
  ground3 = new Ground(150,700,500,500);
  ground4 = new Ground(1750,700,500,500);
  ground5 = new Ground(720,0,width/4,100);
  ground6 = new Ground(1200,0,width/4,100);
  ground7 = new Ground(1680,0,width/4,100);
  ground8 = new Ground(240,0,width/4,100);
  ground9 = new Ground(535,475,275,50);
  ground10 = new Ground(810,475,275,50);
  ground11 = new Ground(1085,475,275,50);
  ground12 = new Ground(1360,475,280,50);
  // In level 3
  ground13 = new Ground(175,700,350,600);
  ground14 = new Ground(720,0,width/4,100);
  ground15 = new Ground(1200,0,width/4,100);
  ground16 = new Ground(1680,0,width/4,100);
  ground17 = new Ground(240,0,width/4,100); 
  ground19 = new Ground(1775,700,350,600);
  ground18 = new Ground(500,900,310,100);
  ground20 = new Ground(810,900,310,100);
  ground21 = new Ground(1125,900,320,100);
  ground22 = new Ground(1440,900,320,100);
  ground23 = new Ground(width/2,150,200,200);
  ground24 = new Ground(width/2,360,200,225);
  // In level 4
  ground25 = new Ground(100,700,275,600);
  ground26 = new Ground(1775,950,350,200);
  ground27 = new Ground(720,0,width/4,100);
  ground28 = new Ground(1200,0,width/4,100);
  ground29 = new Ground(1680,0,width/4,100);
  ground30 = new Ground(240,0,width/4,100);  
  ground31 = new Ground(775,1000,150,400);
  ground32 = new Ground(775,150,150,200);
  ground33 = new Ground(775,362,150,225);
  ground34 = new Ground(1775,950,350,200);

  ground35 = new Ground(1375,575,150,200);
  ground36 = new Ground(1375,788,150,225);
  ground37 = new Ground(1375,100,150,100);
}

function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  createEdgeSprites()


  Background.visible=0;
  introButton.visible=0;
  playButton.visible=0;
  returnForLevel.visible=0;
  returnButton.visible=0;
  creditButton.visible=0;
  
  level1.visible=0;
  level2.visible=0;
  level3.visible=0;
  level4.visible=0;
  level5.visible=0;
  spike1.visible=0;
  spike2.visible=0;
  spike3.visible=0;

  gamestates();
}

function gamestates(){
  if(gamestate==="home"){
    Background.visible=1;
    introButton.visible=1;
    creditButton.visible=1;
    playButton.visible=1;

    if(mousePressedOver(playButton)){
      gamestate="level"
    } 
    if(mousePressedOver(introButton)){
      gamestate="storyAndControls"
    }
    if(mousePressedOver(creditButton)){
      gamestate="credits"
    }
  
    imageMode(CENTER);
    image(headingIMG,width/2,height/2-250,500,230)

    textFont("Ariel")
    fill("black")
    textSize(100);
    text("Play",playButton.x-185,playButton.y+10);
    textSize(50);
    text("Story and",introButton.x-190,introButton.y-30);                            
    text("Controls",introButton.x-180,introButton.y+30);
    text("Credits",1725,855)
}


  if(gamestate==="storyAndControls"){
    Background.visible=1;
    returnButton.visible=1;

    if(mousePressedOver(returnButton)){
      gamestate="home"
    } 

    fill("white");
    rectMode(CENTER);
    rect(width/2,height/2,width-300,height-100);
  
    textFont("Ariel")
    fill("black");
    textSize(35);
    text("You are a knight who was gifted the ability to make big jumps by your god because of the good works you had",180,120);
    text("done throughout your life. One day,you were going through the forest to go back home after completing your",190,170);
    text("quest. But suddenly, a witch appears in front of you, captures you in a magic bubble, and takes you to her tower",175,220);
    text("and locks you on the top floor to trap you while she was preparing the magic to extract your special ability. She",170,270)
    text("told you that after she takes your ability, she will kill you because the quest which your were coming from was to",165,320);
    text("kill her SISTER(she was a bad person btw). You have to exit the tower as soon as possible so that you can stop",180,370)
    text("the witch from taking your special ability and also to stop her from executing her plan to kill you after taking",200,420);
    text("your ability.",870,470)
    textSize(40)
    text("Jump with 'Up Arrow' or 'SpaceBar'",700,575);
    text("Move left with 'Left Arrow'                            Move right with 'Right Arrow'",380,675);
    
    textSize(70);
    text("All The Best!!",width/2-200,800);
  }


  if(gamestate==="level"){
    Background.visible=1;
    returnButton.visible=1;
    level1.visible=1;
    level2.visible=1;
    level3.visible=1;
    level4.visible=1;
    level5.visible=1;
    

    if(mousePressedOver(returnButton)){
      gamestate="home"
    } 
    if(mousePressedOver(level1)){
      gamestate="level1"
    }
    if(mousePressedOver(level2)){
      gamestate="level2"
    }
    if(mousePressedOver(level3)){
      gamestate="level3"
    }
    if(mousePressedOver(level4)){
      gamestate="level4"
    }
    fill("black")
    textSize(80);
    text("1                           3                          5",300,360);
    text("2                           4",620,575);
  }


  if(gamestate==="credits"){

    returnButton.visible=1;
    Background.visible=1;

    fill("white");
    rectMode(CENTER);
    rect(width/2,height/2,900,500);

    if(mousePressedOver(returnButton)){
      gamestate="home"
    } 

    textFont("Ariel");
    fill("black");
    textSize(50);
    text("Coding                        Kushagra Agarwal",550,300);
    text("Game idea                   Kushagra Agarwal",550,375);
    text("Teaching the coder      Garima Aggarwal",550,450);
    text("from Whitehat jr.",1000,525);
    text("Guidance                     Garima Aggarwal",550,625);
  }


  if(gamestate==="level1"){
    knight.body.position.x=100
    knight.body.position.y=600

    knightMovement()

    knight.display();
    ground1.display();
    ground2.display()
    
    returnForLevel.visible=1;
    spike1.visible=1;
    spike2.visible=1;
    spike3.visible=1;

    imageMode(CENTER);
    image(endingPortalIMG,1850,600,150,300)

    
  
    if(knight.body.position.x>windowWidth-100){
      gamestate="level"
      level2.addImage(levelButtonIMG);
      level2.scale=1;
    }

    if(mousePressedOver(returnForLevel))
      gamestate="level"
    
    if(bodyTouchesASprite(knight,spike1) || bodyTouchesASprite(knight,spike2) || bodyTouchesASprite(knight,spike3)){
      Matter.Body.setPosition(knight.body,{x:100,y:700})
      Matter.Body.setVelocity(knight.body,{x:0,y:0})
    }
  
    for(var i=0;i<width;i=i+100){
        imageMode(CENTER);
        image(downFacingSpikeIMG,i,400,100,100)
      } 

      spike1.debug=true;
      spike2.debug=true;
      spike3.debug=true;

    fill("white")
    strokeWeight(5)
    stroke(0)  
    textSize(50);
    text("Mam the colliding with the spike is not correct",175,300);  
    text("Mam the knight is going through the walls",175,200); 
    text("Mam the knight is not moving because of level 2(if you are wondering)",175,100); 
    }

  if(gamestate==="level2"){
    knight.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();
    ground10.display();
    ground11.display();
    ground12.display();
    returnForLevel.visible=1
    knight.body.position.x=200
    knight.body.position.y=350

    knightMovement()  
    lavaFireballspawn(random(450,1450),50)
    
    imageMode(CENTER);
    image(startingPortalIMG,50,300,150,300);
    image(endingPortalIMG,1850,300,150,300);
    image(lavaIMG,537,850,275,100);
    image(lavaIMG,813,850,280,100);
    image(lavaIMG,1088,850,275,100);
    image(lavaIMG,1363,850,275,100);

    for(var i=0;i<width;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,100,100,100)
    } 

    if(mousePressedOver(returnForLevel)){
      gamestate="level"
    }
    fill("white")
    strokeWeight(5)
    stroke(0)  
    textSize(50);
    text("Feeling the burn??",750,650);
  }  
  if(gamestate==="level3"){
    knight.display();
    ground13.display();
    ground14.display();
    ground15.display();
    ground16.display();
    ground17.display();
    ground18.display();
    ground19.display();
    ground20.display();
    ground21.display();
    ground22.display();
    ground23.display();
    ground24.display();

    returnForLevel.visible=1

    knight.body.position.x=200
    knight.body.position.y=250

    imageMode(CENTER);
    image(startingPortalIMG,50,250,150,300);
    image(endingPortalIMG,1850,250,150,300);

    for(var i=0;i<900;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,100,100,100)
    } 
    for(var i=1110;i<width;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,100,100,100)
    } 
    for(var i=425;i<1600;i=i+100){
      imageMode(CENTER);
      image(upFacingSpikeIMG,i,800,100,100)
    }
    for(var i=910;i<1110;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,525,100,100)
    } 
    for(var i=450;i<800;i=i+100){
      imageMode(CENTER);
      image(rightFacingSpikeIMG,400,i,100,100)
    } 
    for(var i=450;i<800;i=i+100){
      imageMode(CENTER);
      image(leftFacingSpikeIMG,1550,i,100,100)
    } 
    for(var i=125;i<500;i=i+100){
      imageMode(CENTER);
      image(leftFacingSpikeIMG,810,i,100,100)
    } 
    for(var i=125;i<500;i=i+100){
      imageMode(CENTER);
      image(rightFacingSpikeIMG,1110,i,100,100)
    } 

    if(mousePressedOver(returnForLevel)){
      gamestate="level"
    }

    fill("white")
    strokeWeight(5)
    stroke(0)  
    textSize(50);
    text("I can bet you died atleast once!!",600,40);

  }
  if(gamestate==="level4"){
    knight.display();
    ground25.display();
    ground26.display();
    ground27.display();
    ground28.display();
    ground29.display();
    ground30.display();
    ground31.display();
    ground32.display();
    ground33.display();
    ground34.display();
    ground35.display();
    ground36.display();
    ground37.display();
    returnForLevel.visible=1

    knight.body.position.x=200
    knight.body.position.y=300

    imageMode(CENTER);
    image(startingPortalIMG,50,250,150,300);
    image(endingPortalIMG,1850,700,150,300);
    image(lavaIMG,465,900,460,100);
    image(lavaIMG,1075,900,450,100);
    image(lavaIMG,1525,900,150,100);

    lavaFireballspawn(random(400,550),150);
    lavaFireballspawn(random(1000,1150),100);
    lavaFireballspawn(1525,Math.round(random(50,75)))

    for(var i=450;i<height;i=i+100){
      imageMode(CENTER);
      image(rightFacingSpikeIMG,285,i,100,100)
    }
    for(var i=850;i<height;i=i+100){
      imageMode(CENTER);
      image(leftFacingSpikeIMG,650,i,100,100)
    }
    for(var i=850;i<height;i=i+100){
      imageMode(CENTER);
      image(rightFacingSpikeIMG,900,i,100,100)
    }
    for(var i=525;i<height;i=i+100){
      imageMode(CENTER);
      image(leftFacingSpikeIMG,1250,i,100,100)
    }
    for(var i=775;i<800;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,525,100,100)
    }
    for(var i=1375;i<1400;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,200,100,100)
    }
    for(var i=50;i<700;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,100,100,100)
    }
    for(var i=900;i<1300;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,100,100,100)
    }
    for(var i=1500;i<width;i=i+100){
      imageMode(CENTER);
      image(downFacingSpikeIMG,i,100,100,100)
    }
    for(var i=125;i<500;i=i+100){
      imageMode(CENTER);
      image(leftFacingSpikeIMG,650,i,100,100)
    }
    for(var i=125;i<500;i=i+100){
      imageMode(CENTER);
      image(rightFacingSpikeIMG,900,i,100,100)
    }

    fill("white")
    strokeWeight(5)
    stroke(0)  
    textSize(50);
    text("It's HARD!!",1600,400);

    if(mousePressedOver(returnForLevel)){
      gamestate="level"
    }
  }
}



function bodyTouchesASprite(physics,sprite){
  if(sprite.x - physics.body.position.x/1.5 < sprite.width/2 + physics.width/2 && 
    physics.body.position.x - sprite.x < sprite.width/2 + physics.width/2 && 
    sprite.y - physics.body.position.y < sprite.height/2 + physics.height/2 &&
    physics.body.position.y - sprite.y < sprite.height/2 + physics.height/2){
      return true
    }
    else{
      return false
    }
}


function knightMovement(){
  // 38 = up arrow
  // 32 = spacebar
  if(keyDown(38)||keyDown(32)){
    knight.body.position.y=knight.body.position.y-1
  }

  if(keyDown("RIGHT_ARROW")){
    knight.body.position.x=knight.body.position.x+0.5
  }
 
  if(keyDown("LEFT_ARROW")){
    knight.body.position.x=knight.body.position.x-0.5
  }
 
}

function lavaFireballspawn(x,f){
  if(frameCount%f===0){
    var lavaFireball=createSprite(x,1000,50,100);
    lavaFireball.addImage(lavaFireballIMG);
    lavaFireball.scale=0.8
    lavaFireball.velocityY=-10;
    lavaFireball.lifetime=120
  }
}