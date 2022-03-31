'use strict';

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
    let elements = document.getElementsByName('inputText');
    console.log(elements);
    console.log(elements[0].value);
}, false);
 

// name属性で要素を取得するにはgetElementsByNameメソッドを使用する
// Elementsが複数形であることに注意
// 戻り値は配列形式のような形で返るのでinput要素に入力された値を取り出すためにはelementsに[0]をつけ、valueプロパティを使用する。