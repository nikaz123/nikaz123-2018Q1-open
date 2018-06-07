


import Game, {root} from './Game.js';

import GLOBALS from   './globals';

GLOBALS.timer=document.querySelector(".timer");
GLOBALS.minute=0;
GLOBALS.second=0;
GLOBALS.top10=[];






/// add event listeners

let btnStartGame = document.getElementById('startGameBtn');
btnStartGame.addEventListener("click", startGame);


let btnStopGame = document.getElementById('stopGameBtn');
btnStopGame.addEventListener("click", stopGame);

function drawTop10(number) {

    let resultsTop10 = document.querySelector('.results');
    resultsTop10.innerHTML = '';
    let arrayTop10 = JSON.parse(localStorage['top10']);
    arrayTop10=arrayTop10.filter(function(a){return a[3]==number});

    for (let i = 0; i < 10; i++) {
        let oneRowTop10element = document.createElement('p');
        if (arrayTop10.length!=0 && arrayTop10[i] ){
            oneRowTop10element.innerHTML = i+1 + '.' + '.................' + arrayTop10[i][0] + '.................' + arrayTop10[i][1]+ '.................' + function (number) {  switch (number) {

                case 10:
                    return 'low';

                case 18:
                    return 'medium';

                case 24:
                    return 'high';

            }} (arrayTop10[i][3])+ '.................';}
        resultsTop10.appendChild(oneRowTop10element);
    }


}

function startGame(e) {
    e.preventDefault();
    if (!validateGameConfig()) return;
    toggleWelcomePart();
    toggleGameWindow();
    startTimer();
    GLOBALS.newgame = new Game(Number.parseInt(GLOBALS.number), Number.parseInt(GLOBALS.picture),drawTop10);
    GLOBALS.newgame.init();
}

// validate all input and checkbox

function validateGameConfig() {
    if (document.getElementById('name').value == '') {
        showError('empty name');
        return false;
    }
    localStorage['name'] = document.getElementById('name').value;

    if (document.getElementById('lastName').value == '') {
        showError('empty last name');
        return false;
    }
    localStorage['lastName'] = document.getElementById('lastName').value;

    if (document.getElementById('email').value == '') {
        showError('empty email');
        return false;
    }
    localStorage['email'] = document.getElementById('email').value;

    let flag = 0;
    let radioLevel = document.querySelectorAll('.radio');
    radioLevel.forEach(function (element) {
        if (element.checked) {
            flag = 1;
            GLOBALS.number = element.value
        }
    });
    if (flag == 0) {
        showError('level not selected');
        return false;
    }
    flag = 0;
    let radioShirt = document.querySelectorAll('.radioShirt');
    radioShirt.forEach(function (element) {
        if (element.checked) {
            flag = 1;
            GLOBALS.picture = element.value
        }

    });
    if (flag == 0) {
        showError('shirt not selected');
        return false;
    }
    return true
}
/// stop game and return to welcome-part

function stopGame() {
    toggleGameWindow();
    toggleWelcomePart();
    clearInterval(GLOBALS.interval);
    GLOBALS.second = 0;
    GLOBALS.minute = 0;
    GLOBALS.timer.innerHTML = GLOBALS.minute + " mins " + GLOBALS.second + " secs";
    GLOBALS.newgame.cleanUp();
}

if (typeof localStorage['top10'] == "undefined") localStorage['top10'] = JSON.stringify(GLOBALS.top10);

GLOBALS.top10 = JSON.parse(localStorage['top10']);

drawTop10(10);

//hide game window at start
toggleGameWindow();


function toggleGameWindow() {
    let elemGameWindow = document.getElementById('game-window');
    elemGameWindow.classList.toggle('hide');
}


function toggleWelcomePart() {
    let elemWelcomePart = document.getElementById('welcome-part');
    elemWelcomePart.classList.toggle('hide');
}


function startTimer() {
    GLOBALS.interval = setInterval(function () {
        GLOBALS.timer.innerHTML = GLOBALS.minute + " mins " + GLOBALS.second + " secs";
        GLOBALS.second++;
        if (GLOBALS.second == 60) {
            GLOBALS.minute++;
            GLOBALS.second = 0;
        }
        if (GLOBALS.minute == 60) {
            hour++;
            GLOBALS.minute = 0;
        }
    }, 1000);
}


function showError(message) {
    let messageDiv = document.createElement('div');
    messageDiv.className = "errorMessage";
    let content = document.createTextNode(message);
    messageDiv.appendChild(content);
    let mainElementId = document.querySelector("div .rules");
    mainElementId.appendChild(messageDiv);
    setTimeout(function () {
        messageDiv.parentNode.removeChild(messageDiv)
    }, 1000);

}






