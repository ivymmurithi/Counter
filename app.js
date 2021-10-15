let number = document.querySelector('.numbers');
let addBtn = document.getElementById('add');
let subBtn = document.getElementById('subtract');

addBtn.addEventListener('click', addOne);
subBtn.addEventListener('click', subOne);

let count = 0;

function addOne() {
    count++;
    number.innerHTML = count;
}

function subOne() {
    count--;
    number.innerHTML = count;
}

