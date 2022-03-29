'use strict';

// 名前の入力が完了したら
// 「こんにちは〇〇さん。」と
// コンソールに出力する


// コールバック関数(名前の入力が完了した時に呼ばれる関数)
function greeting(name) {
    console.log('こんにちは' + name + 'さん');
}

// 名前の入力をユーザーに促す関数を書く
function inputUserName(callback) { 
    let name = prompt('あなたのお名前を入力してください!');
    callback(name);
}

// inputUserNameを呼び出す
inputUserName(greeting);
