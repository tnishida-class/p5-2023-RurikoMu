// テキスト「キーボード操作に反応する」
let x, y, vx, vy;
const g = 1; // 重力
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 3 / 4 - 6;
  vx = 2;
  vy = 2;
}

function draw(){
  background(160, 192, 255);
  x = constrain(x, 0, width,);
  y = constrain(y, height * 2 / 4, height * 3 / 4,);
  fill(128, 88, 77)
  rect(0, height * 3 / 4, width, height / 4)
  fill(255)
  ellipse(x, y, 50)
  let speed = 5;
  if(keyIsDown("A".charCodeAt(0))){ speed = 10; }
  if(keyIsDown(LEFT_ARROW)){ x -= speed; }
  if(keyIsDown(RIGHT_ARROW)){ x += speed;  }
  //if(keyIsDown(UP_ARROW)){ y -= 5; }
  //if(keyIsDown(DOWN_ARROW)){ y += 5; }
}
function keyPressed(){
  if(keyCode == " ".charCodeAt(0)){
  y -= height / 4;
} }
function keyReleased(){
  if(keyCode == " ".charCodeAt(0)){
y += height / 4;
  }
}

//" ".charCodeAt(0)

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
