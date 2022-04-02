'use strict';

const sayHelloButton = document.getElementById('sayHelloButton');
function sayHelloEventHandler(e) {
    console.log('Hello');
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);


const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
function removeEventHandler(e) { 
    console.log('remove');
    sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
}
removeEventHandlerButton.addEventListener('click', removeEventHandler, false);








// 「イベントハンドラ」
// イベントに対して行う処理のこと
// 例) コンソールにHelloと出力する処理


// 「イベントリスナ」
// イベントとイベントハンドラを紐づけているもの


// 「イベント駆動型プログラミング」(イベントドリブン)
// 何らかの、イベントが発生したら、何らかのプログラミングが動作するようプログラミングを書く手法のことを指す

