'use strict';

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
    let elements = document.getElementsByClassName('foo');
    console.log(elements);
    for (let i = 0; i < elements.length; i++) { 
        console.log(elements[i].textContent);
    }
}, false);
// クラス名で要素を取得するにはgetElementsByClassNameメソッドを使用する
// Elementsが複数形であることに注意
// 戻り値は配列形式のような形で返るので,要素を取得するためにはelementsに[i]をつけ、textContentプロパティを使用する。