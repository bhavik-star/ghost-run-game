var dakrai,gangar,micarl,misdreavus,priest,background1;

function preload() {
   dakraiImage=loadImage("image/dakrai.png");
   gangarImage=loadImage("image/gangar.png");
   micarlImage=loadImage("image/micarl.png");
   misdreavusImage=loadImage("image/misdreavus.png");
   priestImage=loadImage("image/priest.png");
   backgroundImage=loadImage("image/background.jpg");

}
function setup() {
createCanvas(1200,800);
background1= createSprite(600, 400, 10, 10);
background1.addImage(backgroundImage);
background1.scale=2;
background1.velocityY=5;

  dakrai= createSprite(600, 300, 10, 10);
  dakrai.addImage(dakraiImage);
  dakrai.scale=0.4;

  gangar= createSprite(400, 300, 10, 10);
  gangar.addImage(gangarImage);
  gangar.scale=0.8;

  micarl= createSprite(800, 300, 10, 10);
  micarl.addImage(micarlImage);
  micarl.scale=0.8;

  misdreavus= createSprite(1000, 300, 10, 10);
  misdreavus.addImage(misdreavusImage);
  misdreavus.scale=1.3;

  priest= createSprite(200, 300, 10, 10);
  priest.addImage(priestImage);
  priest.scale=0.3;

 
}

function draw() {
  background("black");  
  if(background1.y > 400  ) {
    background1.y = 200;
 }
  drawSprites();
}