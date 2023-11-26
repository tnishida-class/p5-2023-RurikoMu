// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;


function setup(){
  createCanvas(500, 500);
  count = 0;
  cycle = 100;
}

function draw(){
  background(245, 196, 202);
  if(keyIsPressed){increment = 3;} 
  else{increment = 1;}

  count = (count + increment) % cycle;
  // BLANK[1]
    let size;
    if(count < cycle / 2){size = count + 50;} 
    else{size = (cycle - count) + 50;}
    noStroke()
    fill(209, 98, 111)
    ellipse(width / 2, height / 2, size);
}
