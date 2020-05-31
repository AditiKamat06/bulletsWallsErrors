var bullet,wall,speed,weight,danger,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(20,30);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(30,200,60,20);
  bullet.velocityX=speed;

  wall=createSprite(1000,200,60,height/2);
} 

function draw() {
  background(0);
  bullet.shapeColor=("white");
  wall.shapeColor=(80,80,80);
  
  if ( hasCollided (bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * speed * speed * weight / ( thickness * thickness * thickness );

    if (damage > 10){
      bullet.shapeColor=(255,0,0);
    }

    if (damage < 10){
      bullet.shapeColor=(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if( bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false
}