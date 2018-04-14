'use strict';

let currentJoke = 0;

if (localStorage['check'] == 0) {
    setTimeout("document.getElementById('overlay').style.display='block'", 1)
}

/* сохранили значение checkbox в Local Storage*/

let arr = ['— Пишу сайты. Дешево, быстро, профессионально. — Няшно? — Ясен пень, что няшно! Котят натыкаю, куда укажете!',
    'Пpиходит пpогpаммист к пианисту — посмотpеть на новый pояль. Долго ходит вокpуг, хмыкает, потом заявляет: — Клава неудобная — всего 84 клавиши, половина функциональных, ни одна не подписана, хотя… шифт нажимать ногой — оpигинально.',
    '— Почему кошки очень любят программистов? — Потому, что у них руки мышами пахнут.',
    ' Доказано, что из комбинации лени и логики получаются программисты.',
    '— Зачем компьютеры пищат, когда нажимаешь сразу много клавиш? — Чтобы будить уснувших на клавиатуре программистов.',
    '-Деда, чем ты сейчас занимаешься? Дед отвечает: -Да вот, внучек, прошивку на валенках меняю». В результате программист впал в ступор на целый день.'

];


let buttonChek = document.getElementsByClassName('removePopup');


buttonChek[0].onchange = function () {
    localStorage['check'] = buttonChek[0].checked ? 1 : 0;

};

function printJoke(pSet) {
    let printJoke1 = document.getElementById("carousel");
    printJoke1.innerHTML = '';       // надо удалить все потомки в диве
    let htmlElementP = document.createElement("p");
    htmlElementP.textContent = arr[pSet];
    printJoke1.appendChild(htmlElementP);
    let allli = document.getElementsByTagName('li');
    console.log(allli);
    Array.from(allli).forEach(function (element) {
        element.className = '';
    });
    allli[currentJoke].className = 'redpoint';

}

printJoke(currentJoke);

let keyBtn = document.getElementsByTagName('body');
keyBtn[0].addEventListener("keydown", moveKey);

function moveKey(e) {
    switch (e.keyCode) {
        case
        37:                                   // если нажата клавиша влево
            currentJoke--;
            if (currentJoke < 0) {
                currentJoke = arr.length - 1
            }
            printJoke(currentJoke);
            break;
        case
        39:                                   // если нажата клавиша вправо
            currentJoke++;
            if (currentJoke > arr.length - 1) {
                currentJoke = 0
            }
            printJoke(currentJoke);
            break;
        case 27:
            // если нажата клавиша esc
            document.getElementById('overlay').style.display = 'none';

            break;

    }
}


let leftBtn = document.getElementById('buttonLeft');
let rightBtn = document.getElementById('buttonRight');


leftBtn.onclick = function (event) {
    currentJoke--;
    if (currentJoke < 0) {
        currentJoke = arr.length - 1
    }
    printJoke(currentJoke);
};

rightBtn.onclick = function (event) {
    currentJoke++;
    if (currentJoke > arr.length - 1) {
        currentJoke = 0
    }
    printJoke(currentJoke);
};



