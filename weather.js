let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.coord);
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
//print(data);

//function print(data){
//3回の課題内容
//}
//4回目の課題

//5回目のプロジェクト課題
let div = document.querySelector('div#result'); 
let li = document.createElement('li'); 
li.textContent = '緯度: '+(data.coord.lon); 
div.insertAdjacentElement('beforeend',li); 
let li1 = document.createElement('li'); 
li1.textContent = '経度: '+(data.coord.lat); 
div.insertAdjacentElement('beforeend',li1);
ns=data.weather;
let li2 = document.createElement('li'); 
li2.textContent = '天気: '+(ns.description); 
div.insertAdjacentElement('beforeend',li2); 
let li3 = document.createElement('li'); 
li3.textContent = '最低気温: '+(data.main.temp_min); 
div.insertAdjacentElement('beforeend',li3); 
