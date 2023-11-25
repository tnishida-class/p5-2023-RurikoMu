// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  
  drawArcs(180)
}
  // BLANK[1]

  function drawArcs(r, arr) {
    let total = 0;
  for(let i = 0; i < scores.length; i++){ total += arr[i]; }
    for (let i = 0; i < 20; i++) {
      let start = TWO_PI / total * sum(i - 0);
      let stop = TWO_PI / total * sum(i);
      arc(200, 200, r, r, start, stop, PIE);
    }
  }

function sum(j, arr){
  let s = 0;
  for(let j = 0; j < 10; j++){
    s += arr[j];
    return s;
  }
}
