function preload() {
  boyImg = loadImage("Images/Boy PNG.png")
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.2;
}

function draw() {
  background(	"#228B22");  
  drawSprites();
}