'use strict';

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e){
    // alert('clicked');
    // IDによるノードの取得
    let headerTitle = document.getElementById('headerTitle');
    // 要素ノードの取得
    console.log(headerTitle);
    // 要素ノードのテキストだけを取得
    console.log(headerTitle.textContent);
}, false);