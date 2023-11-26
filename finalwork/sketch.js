// 最終課題を制作しよう
let x, y, vx, vy, blocksize;
vx = 2;
vy = 10;
const g = 1; // 重力
const vyMax = 20;
let isJumping = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 3 / 4 - 6;
  blocksize = 50
}

function draw(){
  background(160, 192, 255);
  vy = constrain(vy += g, -vyMax, vyMax);
  y += vy; //重力
  x = constrain(x, 0, width,);
  y = constrain(y, 0, height * 3 / 4,);
  
  noStroke();
  fill(128, 88, 77);
  rect(0, height * 3 / 4 + 1, width, height / 4); //地面
  fill(107, 181, 108);
  rect(0, height * 3 / 4, width, 20); //芝生

  //雲
  cloud(145, 100, 270, 60);
  cloud(500, 300, 270, 60);
  cloud(900, 250, 270, 60);
  cloud(1300, 150, 270, 60);

  //花
  for(let i =0; i < 10; i++){
    let fx = width / 10 * i + 20;
    let fy = height * 3 / 4 - 50;
    if(i % 2 == 0){
      noStroke();
      fill(130, 118, 245);
      flower(fx, fy, 10);
    }
  else{
      noStroke();
      fill(227, 141, 184);
      flower(fx, fy, 10);
  }
  }
  
  //ブロック
  const block1 = { x: 200, y: height * 3 / 4 - 150, w: blocksize * 2, h: blocksize};
  const block2 = { x: 600, y: height * 3 / 4 - 150, w: blocksize * 3, h: blocksize};
  block(block1.x, block1.y, block1.w, block1.h);
  block(block2.x, block2.y, block2.w, block2.h);

  //まるお
  stroke(0);
  strokeWeight(0.5);
  fill(255);
  ellipse(x, y - 25, 50) ; //地面にめり込まないよう半径ぶんy引く
  let vx = 5;
  if(keyIsDown(SHIFT)){ vx = 10; } //加速
  if(keyIsDown(LEFT_ARROW)){ x -= vx; }
  if(keyIsDown(RIGHT_ARROW)){ x += vx;  }
  //if(keyIsDown(UP_ARROW)){}
  //if(keyIsDown(DOWN_ARROW)){ y += 5; }

//console.log(isJumping);
//console.log("x=", x);
//console.log("y=", y);
}

//ジャンプ
function keyPressed(){
  if(key === 'ArrowUp'){
    jump();
    isJumping = true; 
    console.log("jumped!");
  }
}

function jump(){
  if(isJumping === false){
  vy= -vy}
}

function keyReleased(){
  if (key === "ArrowUp"){
    isJumping = false;
  }
}

//ブロック関数
function block(bx, by, bw, bh){
  stroke(0);
  strokeWeight(1);
  fill(128, 88, 77);
  rect(bx, by, bw, bh);
  
  //ブロックの下でジャンプ
  if(bx - 25 < x &&  x < bx +  bw + 25 &&  by + bh < y  && y < by + bh + 50 && vy < 0){
    y = by + bh + 50;
    vy = -vy;
  }
  //ブロックの上
  else if(x > bx - 12 && x < bx + bw + 12 && by < y && y < by + bh){
    y = constrain(y, height / 5, by);
    vy = 20;
  //ブロック上でジャンプ
    if(keyIsDown(UP_ARROW) ){
    jump(); 
    }
    else {
      y = constrain(y, height * 1 / 4, height * 3 / 4,);
    }
    }
  //地面にいるとき
  else{
    y = constrain(y, height / 4, height * 3 / 4,);
  }
}

//雲関数
function cloud(x, y, w ,h){
  noStroke();
  fill(255);
  ellipse(x, y, w, h);
  ellipse(x + 120, y + 25, w - 170, h - 20);
}


//花関数
function flower(x, y, r){
  stroke(107, 181, 108);
  line(x, y, x, y + 50);
  noStroke();
  ellipse(x, y - 5, r);
  ellipse(x + 5, y - 2, r);
  ellipse(x - 5, y - 2, r);
  ellipse(x + 3, y + 5, r);
  ellipse(x - 3, y + 5, r);
  fill(255, 238, 8);
  ellipse(x, y, r / 2);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
