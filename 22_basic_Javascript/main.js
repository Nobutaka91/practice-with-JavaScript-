'use strict';

let num = 0;
function updateCounter(n) {
    const counter = document.getElementById('counter');
    counter.textContent = n;
}


function countUp() {
    num++;
    updateCounter(num);
}

function reset() {
    num = 0;
    updateCounter(num);
 }

countUpButton.addEventListener('click', countUp, false);
resetButton.addEventListener('click', reset, false);



