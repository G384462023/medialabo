////////// 課題3-2 ここからプログラムを書こう
/*console.log(data.coord);
let ns = data.weather;
for(let n of ns){
  console.log(n);
}
console.log(data.base);
console.log(data.main);
console.log(data.visibility);
console.log(data.wind);
console.log(data.clouds);
console.log(data.dt);
console.log(data.sys);
console.log(data.timezone);
console.log(data.id);
console.log(data.name);
console.log(data.cod); 
*/
//print(data);

function print(data){
  //データの削除
  let w = document.querySelector("li");
  if(w) w.remove();
  let w1 = document.querySelector("li");
  if(w1) w1.remove();
  let w2 = document.querySelector("li");
  if(w2) w2.remove();
  let w3 = document.querySelector("li");
  if(w3) w3.remove();
  let w4 = document.querySelector("li");
  if(w4) w4.remove();
  let w5 = document.querySelector("li");
  if(w5) w5.remove();
  let w6 = document.querySelector("li");
  if(w6) w6.remove();
  let w7 = document.querySelector("li");
  if(w7) w7.remove();
  let w8 = document.querySelector("li");
  if(w8) w8.remove();

  let div = document.querySelector('div#result'); 
  let li = document.createElement('li'); 
  li.textContent = '緯度: '+(data.coord.lon); 
  div.insertAdjacentElement('beforeend',li); 
  let li1 = document.createElement('li'); 
  li1.textContent = '経度: '+(data.coord.lat); 
  div.insertAdjacentElement('beforeend',li1);
  let li2 = document.createElement('li'); 
  li2.textContent = '天気: '+(data.weather[0].description); 
  div.insertAdjacentElement('beforeend',li2); 
  let li3 = document.createElement('li'); 
  li3.textContent = '最低気温: '+(data.main.temp_min); 
  div.insertAdjacentElement('beforeend',li3); 
  let li4 = document.createElement('li'); 
  li4.textContent = '最高気温: '+(data.main.temp_max); 
  div.insertAdjacentElement('beforeend',li4); 
  let li5 = document.createElement('li'); 
  li5.textContent = '湿度: '+(data.main.humidity); 
  div.insertAdjacentElement('beforeend',li5); 
  let li6 = document.createElement('li'); 
  li6.textContent = '風速: '+(data.wind.speed); 
  div.insertAdjacentElement('beforeend',li6); 
  let li7 = document.createElement('li'); 
  li7.textContent = '風向: '+(data.wind.deg); 
  div.insertAdjacentElement('beforeend',li7); 
  let li8 = document.createElement('li'); 
  li8.textContent = '都市名: '+(data.name); 
  div.insertAdjacentElement('beforeend',li8); 
  
}

//4回目のプロジェクト課題

//6回のコード
let c = document.querySelector('button#print');
c.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
    let i = document.querySelector('input[name="kensaku"]');
    let kensaku = i.value;
    console.log('検索キー: ' + kensaku);
    // URL を設定
    let url ="https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json";
    if(kensaku=="カイロ"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json";
    }
    else if(kensaku=="モスクワ"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json";
    }
    else if(kensaku=="ヨハネスブルク"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json";
    }
    else if(kensaku=="北京"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json";
    }
    else if(kensaku=="東京"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json";
    }
    else if(kensaku=="シンガポール"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json";
    }
    else if(kensaku=="シドニー"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json";
    }
    else if(kenskau=="ロンドン"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json";
    }
    else if(kensaku=="パリ"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json";
    }
    else if(kenskau=="リオデジャネイロ"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json";
    }
    else if(kenskau=="ニューヨーク"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json";
    }
    else if(kensaku=="ロサンゼルス"){
      url ="https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json";
    }
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}