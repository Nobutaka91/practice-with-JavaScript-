'use strict';

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
    // セレクターを使ってあるクラスに一致する最初の要素を取得するにはquerySelectorメソッドを使う。
    let element = document.querySelector('.foo');
    console.log(element);
    console.log(element.textContent);

    // 複数取得するにはquerySelectorAllメソッドを使用する
    let elements = document.querySelectorAll('.foo');
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].textContent);
     }
 }, false);

