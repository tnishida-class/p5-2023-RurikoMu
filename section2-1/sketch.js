// テキスト「繰り返し」
function setup() {
createCanvas(100,100);
fill(0);
for(let i = 0; i < 5; i++){
  Fill(112, 112, 112)
  rect(i * 20, i * 20, 20, 20);
}
}

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
