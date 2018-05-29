


import Game, {root} from './Game.js';


let second = 0, minute = 0;
let timer = document.querySelector(".timer");
let interval;

let picture = 0;
let number = 0;

let newgame = {};

let top10 = [];




/// add event listeners

let btnStartGame = document.getElementById('startGameBtn');
btnStartGame.addEventListener("click", startGame);


let btnStopGame = document.getElementById('stopGameBtn');
btnStopGame.addEventListener("click", stopGame);


function startGame(e) {
    e.preventDefault();
    if (!validateGameConfig()) return;
    toggleWelcomePart();
    toggleGameWindow();
    startTimer();
    newgame = new Game(Number.parseInt(number), Number.parseInt(picture));
    newgame.init();
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
            number = element.value
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
            picture = element.value
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
    clearInterval(interval);
    second = 0;
    minute = 0;
    timer.innerHTML = minute + " mins " + second + " secs";
    newgame.cleanUp();
}

if (typeof localStorage['top10'] == "undefined") localStorage['top10'] = JSON.stringify(top10);

top10 = JSON.parse(localStorage['top10']);

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
    interval = setInterval(function () {
        timer.innerHTML = minute + " mins " + second + " secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
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


function drawTop10(number) {

    let resultsTop10 = document.querySelector('.results');
    resultsTop10.innerHTML = '';
    let arrayTop10 = JSON.parse(localStorage['top10']);
    arrayTop10=arrayTop10.filter(function(a){return a[3]==number});

    for (let i = 0; i < 10; i++) {
        let oneRowTop10element = document.createElement('p');
        if (arrayTop10.length!=0){
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




