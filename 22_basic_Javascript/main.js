'use strict';

// イベントとイベントハンドラ
function handleChange() {
    // 「すべてチェック」の要素を取得
    const checkAll = document.getElementById('checkAll');
    // name属性がlanguageのチェックボックス要素を取得
    const checkBoxes = document.getElementsByName('language');
    // name属性がlanguageのチェックボックス要素をループ処理
    for (let i = 0; i < checkBoxes.length; i++) {

        // 各チェックボックスのチェック状態を、
        // 「すべてにチェックボックス」の状態に合わせる
        checkBoxes[i].checked = checkAll.checked;
    }
}

// checkAllボタンのchangeイベントのイベントハンドラを登録
checkAll.addEventListener('change', handleChange, false);






// 「イベントハンドラ」
// イベントに対して行う処理のこと
// 例) コンソールにHelloと出力する処理


// 「イベントリスナ」
// イベントとイベントハンドラを紐づけているもの


// 「イベント駆動型プログラミング」(イベントドリブン)
// 何らかの、イベントが発生したら、何らかのプログラミングが動作するようプログラミングを書く手法のことを指す

