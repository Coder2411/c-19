var box

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,30,30)
}

function draw() 
{
  background("white");
  if (keyIsDown(RIGHT_BUTTON)) {
    box.position.x = box.position.x + 5
  }
  if (keyIsDown(LEFT_BUTTON)) {
    box.position.x = box.position.x - 5
  }
  if (keyIsDown(UP_BUTTON)) {
    box.position.y = box.position.y - 5
  }
  if (keyIsDown(DOWN_BUTTON)) {
    box.position.y = box.position.y + 5
  }
}




