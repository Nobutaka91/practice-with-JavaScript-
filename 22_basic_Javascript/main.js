'use strict';

// Windowオブジェクトとは
// ブラウザの画面に関係するプロパティやメソッドを束ねておく入れ物のようなもの。
// グローバルオブジェクトのため、どこからでも呼び出せてすぐに使える。


// コンソール出力
// window.console.log('Hello');

// 警告表示
// window.alert('Are you OK?');

// 確認ダイアログ
// window.confirm('Are you OK?');

// 別のWindowを開く
// window.open('https://www.google.co.jp');

// Windowを閉じる
// window.close();

// スクロール
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
    window.scroll(0, 300);
 }, false);