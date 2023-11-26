//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b= balls[i];
    
    if(b.c < 1){fill(66, 135, 245)}
    else if(1 < b.c && b.c < 2){fill(245, 69, 124)}
    else if(2 < b.c && b.c < 3){fill(250, 238, 70)};
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    
    /*
    let s = random (10, 100)
    let dx = random(10, 50);
    let dy = random(10, 50);
    const b2 = { x: width / 2, y: height / 2, size: s, vx: dx, vy: dy };
    balls.push(b2);
    */
}
const dx = random(-10, 10);
  const dy = random(-10, 10);
  let s = random (10, 100)
  let co = random (0, 3)
  if(mag(dx, dy) > 5){
    const b = { x: width/2, y: height/2, size: s, vx: dx, vy: dy, c: co };
    balls.push(b);
}

/*
function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  let s = random (10, 100)
  let co = random (0, 3)
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: s, vx: dx, vy: dy, c: co };
    balls.push(b);
  }
  */
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
