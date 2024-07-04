// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let result;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector('button#print');
b.addEventListener('click', hantei); 
let b1 = querySelector('input[name="yoso"]')
let yoso = Number(b1.value);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu++;

  console.log(kaisu+"回目の予想: "+yoso);

  if(kaisu>3){
    console.log("答えは "+kotae+" でした．すでにゲームは終わっています");
    result = ("答えは "+kotae+" でした．すでにゲームは終わっています");
  }

  if(yoso===kotae){
    console.log("正解です．おめでとう!");
    result = ("正解です．おめでとう!");
  }

  if(kaisu===3 && yoso!==kotae){
    console.log("回答回数が3回ならば 「まちがい．残念でした答えは "+kotae+" です．」");
    result = ("回答回数が3回ならば 「まちがい．残念でした答えは "+kotae+" です．」");
  }

  if(kaisu<3 && yoso<kotae){
    console.log("まちがい．答えはもっと大きいですよ");
    result = ("まちがい．答えはもっと大きいですよ");
  }

  if(kaisu<3 && yoso>kotae){
    console.log("まちがい．答えはもっと小さいですよ");
    result = ("まちがい．答えはもっと小さいですよ");
  }

    //4回目の追加分
    let kai = document.querySelector('span#kaisu'); 
    kai.textContent = kaisu; 
    let yos = document.querySelector('span#answer'); 
    yos.textContent = yoso;
    let res = document.querySelector('p#result'); 
    res.textContent = result;
    //終わり
}