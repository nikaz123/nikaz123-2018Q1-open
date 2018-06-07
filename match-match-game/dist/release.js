/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: root, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./globals.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_0__);
const root = document.querySelector('.gamefield');



class Game {

    constructor(number, picture, callback) {
        this.number = number;
        this.picture = picture;
        this.url = null;
        this.arr = null;
        this.value = null;
        this.current = null;
        this.count = 0;
        this.point = number;
        this.size = null;
        this.callback=callback;

    }


    choice() {

        switch (this.picture) {

            case 1:
                this.url = 'one-skirt';
                break;

            case 2:
                this.url = 'two-skirt';
                break;

            case 3:
                this.url = 'three-skirt';
                break;

        }

        this.arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

        switch (this.number) {

            case 10:
                this.size = 'big';
                break;

            case 18:
                this.size = 'medium';
                break;

            case 24:
                this.size = 'small';
                break;
        }
    }


    build() {
        let mynumber = this.number;
        while (mynumber > 0) {
            let value = Math.round(Math.random() * (mynumber - 1));

            root.innerHTML += `<div class="container ${this.size}">
            <div class="card" num=${this.arr[value]}>
              <div class="front ${this.url}"></div>
              <div class="back"><img src="images/fish${this.arr[value]}.png"</div>
            </div>
          </div>`;

            this.arr.splice(value, 1);
            mynumber = mynumber - 1;
        }
    }


    handle() {
        root.addEventListener('click', (event) => {
            let target = event.target;
            while (target !== root) {
                if (target.classList.contains('card')) {
                    if (this.count === 2) {
                        return false;
                    }
                    target.classList.add('flipped');
                    this.count = this.count + 1;

                    if (this.count === 1) {
                        this.current = target;
                    }

                    if (target === this.current) {
                        this.count = 1;
                    }

                    if (this.count === 2) {
                        if (this.current.getAttribute('num') === target.getAttribute('num')) {
                            setTimeout(() => {
                                this.current.classList.add('hideout');
                                target.classList.add('hideout');
                                this.point = this.point - 2;
                                this.count = 0;
                                if (this.point === 0) {
                                    this.win();
                                }

                            }, 500);

                        } else {
                            setTimeout(() => {
                                this.current.classList.remove('flipped');
                                target.classList.remove('flipped');
                                this.count = 0;
                            }, 1000);
                        }
                    }
                    return;
                }
                target = target.parentNode;
            }
        });
    }


    cleanUp() {
        root.innerHTML = '';
    }

    win() {
        root.classList.remove('wrapper');
        root.innerHTML = `<h2 class="win_title">You win!</h2>`;
        clearInterval(_globals__WEBPACK_IMPORTED_MODULE_0___default.a.interval);
        let name = localStorage['name'];
        let timestr = _globals__WEBPACK_IMPORTED_MODULE_0___default.a.minute + ":" + _globals__WEBPACK_IMPORTED_MODULE_0___default.a.second;
        let seconds = _globals__WEBPACK_IMPORTED_MODULE_0___default.a.minute * 60 + _globals__WEBPACK_IMPORTED_MODULE_0___default.a.second;
        let record = [name, timestr, seconds, this.number];
        _globals__WEBPACK_IMPORTED_MODULE_0___default.a.top10 =  JSON.parse(localStorage['top10']);
        _globals__WEBPACK_IMPORTED_MODULE_0___default.a.top10.push(record);

        let curr_number = this.number;

        let curr_diff = _globals__WEBPACK_IMPORTED_MODULE_0___default.a.top10.filter(function (a) {
            return a[3] == curr_number
        });

        curr_diff.sort(sortByTime);


        curr_diff = curr_diff.slice(0, 10);

        let other_diff = _globals__WEBPACK_IMPORTED_MODULE_0___default.a.top10.filter(function (a) {
            return a[3] !== curr_number
        });

        _globals__WEBPACK_IMPORTED_MODULE_0___default.a.top10 = other_diff.concat(curr_diff);
        localStorage['top10'] = JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0___default.a.top10);

        this.callback(curr_number);

        function sortByTime(a, b) {
            return a[2] > b[2] ? 1 : -1;
        }
    }


    init() {
        this.choice();
        this.build();
        this.handle();
    }

}

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./Game.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./globals.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_1__);







_globals__WEBPACK_IMPORTED_MODULE_1___default.a.timer=document.querySelector(".timer");
_globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute=0;
_globals__WEBPACK_IMPORTED_MODULE_1___default.a.second=0;
_globals__WEBPACK_IMPORTED_MODULE_1___default.a.top10=[];






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
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.newgame = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](Number.parseInt(_globals__WEBPACK_IMPORTED_MODULE_1___default.a.number), Number.parseInt(_globals__WEBPACK_IMPORTED_MODULE_1___default.a.picture),drawTop10);
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.newgame.init();
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
            _globals__WEBPACK_IMPORTED_MODULE_1___default.a.number = element.value
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
            _globals__WEBPACK_IMPORTED_MODULE_1___default.a.picture = element.value
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
    clearInterval(_globals__WEBPACK_IMPORTED_MODULE_1___default.a.interval);
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.second = 0;
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute = 0;
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.timer.innerHTML = _globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute + " mins " + _globals__WEBPACK_IMPORTED_MODULE_1___default.a.second + " secs";
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.newgame.cleanUp();
}

if (typeof localStorage['top10'] == "undefined") localStorage['top10'] = JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_1___default.a.top10);

_globals__WEBPACK_IMPORTED_MODULE_1___default.a.top10 = JSON.parse(localStorage['top10']);

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
    _globals__WEBPACK_IMPORTED_MODULE_1___default.a.interval = setInterval(function () {
        _globals__WEBPACK_IMPORTED_MODULE_1___default.a.timer.innerHTML = _globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute + " mins " + _globals__WEBPACK_IMPORTED_MODULE_1___default.a.second + " secs";
        _globals__WEBPACK_IMPORTED_MODULE_1___default.a.second++;
        if (_globals__WEBPACK_IMPORTED_MODULE_1___default.a.second == 60) {
            _globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute++;
            _globals__WEBPACK_IMPORTED_MODULE_1___default.a.second = 0;
        }
        if (_globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute == 60) {
            hour++;
            _globals__WEBPACK_IMPORTED_MODULE_1___default.a.minute = 0;
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








/***/ }),

/***/ "./globals.js":
/*!********************!*\
  !*** ./globals.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

let GLOBALS = {
    second: 0,
    minute: 0,
    timer: {},
    interval: {},
    picture: 0,
    number: 0,
    newgame: {},
    top10: []
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVELFVBQVU7QUFDakUsb0NBQW9DLGdCQUFnQjtBQUNwRCxrQ0FBa0MsU0FBUztBQUMzQyx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLbUI7O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0JBQW9COztBQUVqRSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0EsaUxBQWlMOztBQUVqTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9yZWxlYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwLmpzXCIpO1xuIiwiZXhwb3J0ICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xyXG5cclxuaW1wb3J0IEdMT0JBTFMgZnJvbSAgICcuL2dsb2JhbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobnVtYmVyLCBwaWN0dXJlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMucGljdHVyZSA9IHBpY3R1cmU7XHJcbiAgICAgICAgdGhpcy51cmwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrPWNhbGxiYWNrO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hvaWNlKCkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGljdHVyZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSAnb25lLXNraXJ0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSAndHdvLXNraXJ0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSAndGhyZWUtc2tpcnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hcnIgPSBbMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyLCAxMl07XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5udW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSAnYmlnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDI0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplID0gJ3NtYWxsJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgbGV0IG15bnVtYmVyID0gdGhpcy5udW1iZXI7XHJcbiAgICAgICAgd2hpbGUgKG15bnVtYmVyID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobXludW1iZXIgLSAxKSk7XHJcblxyXG4gICAgICAgICAgICByb290LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke3RoaXMuc2l6ZX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBudW09JHt0aGlzLmFyclt2YWx1ZV19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9udCAke3RoaXMudXJsfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrXCI+PGltZyBzcmM9XCJpbWFnZXMvZmlzaCR7dGhpcy5hcnJbdmFsdWVdfS5wbmdcIjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFyci5zcGxpY2UodmFsdWUsIDEpO1xyXG4gICAgICAgICAgICBteW51bWJlciA9IG15bnVtYmVyIC0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZSgpIHtcclxuICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgIT09IHJvb3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdmbGlwcGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50LmdldEF0dHJpYnV0ZSgnbnVtJykgPT09IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ251bScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlb3V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMucG9pbnQgLSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBwZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcHBlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xlYW5VcCgpIHtcclxuICAgICAgICByb290LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbigpIHtcclxuICAgICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3dyYXBwZXInKTtcclxuICAgICAgICByb290LmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ3aW5fdGl0bGVcIj5Zb3Ugd2luITwvaDI+YDtcclxuICAgICAgICBjbGVhckludGVydmFsKEdMT0JBTFMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIGxldCBuYW1lID0gbG9jYWxTdG9yYWdlWyduYW1lJ107XHJcbiAgICAgICAgbGV0IHRpbWVzdHIgPSBHTE9CQUxTLm1pbnV0ZSArIFwiOlwiICsgR0xPQkFMUy5zZWNvbmQ7XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSBHTE9CQUxTLm1pbnV0ZSAqIDYwICsgR0xPQkFMUy5zZWNvbmQ7XHJcbiAgICAgICAgbGV0IHJlY29yZCA9IFtuYW1lLCB0aW1lc3RyLCBzZWNvbmRzLCB0aGlzLm51bWJlcl07XHJcbiAgICAgICAgR0xPQkFMUy50b3AxMCA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsndG9wMTAnXSk7XHJcbiAgICAgICAgR0xPQkFMUy50b3AxMC5wdXNoKHJlY29yZCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyX251bWJlciA9IHRoaXMubnVtYmVyO1xyXG5cclxuICAgICAgICBsZXQgY3Vycl9kaWZmID0gR0xPQkFMUy50b3AxMC5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbM10gPT0gY3Vycl9udW1iZXJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY3Vycl9kaWZmLnNvcnQoc29ydEJ5VGltZSk7XHJcblxyXG5cclxuICAgICAgICBjdXJyX2RpZmYgPSBjdXJyX2RpZmYuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICAgICBsZXQgb3RoZXJfZGlmZiA9IEdMT0JBTFMudG9wMTAuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhWzNdICE9PSBjdXJyX251bWJlclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHTE9CQUxTLnRvcDEwID0gb3RoZXJfZGlmZi5jb25jYXQoY3Vycl9kaWZmKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2VbJ3RvcDEwJ10gPSBKU09OLnN0cmluZ2lmeShHTE9CQUxTLnRvcDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayhjdXJyX251bWJlcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNvcnRCeVRpbWUoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYVsyXSA+IGJbMl0gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlKCk7XHJcbiAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcblxyXG5cclxuaW1wb3J0IEdhbWUsIHtyb290fSBmcm9tICcuL0dhbWUuanMnO1xyXG5cclxuaW1wb3J0IEdMT0JBTFMgZnJvbSAgICcuL2dsb2JhbHMnO1xyXG5cclxuR0xPQkFMUy50aW1lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpO1xyXG5HTE9CQUxTLm1pbnV0ZT0wO1xyXG5HTE9CQUxTLnNlY29uZD0wO1xyXG5HTE9CQUxTLnRvcDEwPVtdO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxubGV0IGJ0blN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWVCdG4nKTtcclxuYnRuU3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xyXG5cclxuXHJcbmxldCBidG5TdG9wR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wR2FtZUJ0bicpO1xyXG5idG5TdG9wR2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcEdhbWUpO1xyXG5cclxuZnVuY3Rpb24gZHJhd1RvcDEwKG51bWJlcikge1xyXG5cclxuICAgIGxldCByZXN1bHRzVG9wMTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0cycpO1xyXG4gICAgcmVzdWx0c1RvcDEwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGV0IGFycmF5VG9wMTAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsndG9wMTAnXSk7XHJcbiAgICBhcnJheVRvcDEwPWFycmF5VG9wMTAuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhWzNdPT1udW1iZXJ9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBsZXQgb25lUm93VG9wMTBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGlmIChhcnJheVRvcDEwLmxlbmd0aCE9MCAmJiBhcnJheVRvcDEwW2ldICl7XHJcbiAgICAgICAgICAgIG9uZVJvd1RvcDEwZWxlbWVudC5pbm5lckhUTUwgPSBpKzEgKyAnLicgKyAnLi4uLi4uLi4uLi4uLi4uLi4nICsgYXJyYXlUb3AxMFtpXVswXSArICcuLi4uLi4uLi4uLi4uLi4uLicgKyBhcnJheVRvcDEwW2ldWzFdKyAnLi4uLi4uLi4uLi4uLi4uLi4nICsgZnVuY3Rpb24gKG51bWJlcikgeyAgc3dpdGNoIChudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnbG93JztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnbWVkaXVtJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDI0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaGlnaCc7XHJcblxyXG4gICAgICAgICAgICB9fSAoYXJyYXlUb3AxMFtpXVszXSkrICcuLi4uLi4uLi4uLi4uLi4uLic7fVxyXG4gICAgICAgIHJlc3VsdHNUb3AxMC5hcHBlbmRDaGlsZChvbmVSb3dUb3AxMGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXZhbGlkYXRlR2FtZUNvbmZpZygpKSByZXR1cm47XHJcbiAgICB0b2dnbGVXZWxjb21lUGFydCgpO1xyXG4gICAgdG9nZ2xlR2FtZVdpbmRvdygpO1xyXG4gICAgc3RhcnRUaW1lcigpO1xyXG4gICAgR0xPQkFMUy5uZXdnYW1lID0gbmV3IEdhbWUoTnVtYmVyLnBhcnNlSW50KEdMT0JBTFMubnVtYmVyKSwgTnVtYmVyLnBhcnNlSW50KEdMT0JBTFMucGljdHVyZSksZHJhd1RvcDEwKTtcclxuICAgIEdMT0JBTFMubmV3Z2FtZS5pbml0KCk7XHJcbn1cclxuXHJcbi8vIHZhbGlkYXRlIGFsbCBpbnB1dCBhbmQgY2hlY2tib3hcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlR2FtZUNvbmZpZygpIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgc2hvd0Vycm9yKCdlbXB0eSBuYW1lJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlWyduYW1lJ10gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdE5hbWUnKS52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgIHNob3dFcnJvcignZW1wdHkgbGFzdCBuYW1lJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlWydsYXN0TmFtZSddID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3ROYW1lJykudmFsdWU7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgc2hvd0Vycm9yKCdlbXB0eSBlbWFpbCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZVsnZW1haWwnXSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xyXG5cclxuICAgIGxldCBmbGFnID0gMDtcclxuICAgIGxldCByYWRpb0xldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvJyk7XHJcbiAgICByYWRpb0xldmVsLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICBHTE9CQUxTLm51bWJlciA9IGVsZW1lbnQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChmbGFnID09IDApIHtcclxuICAgICAgICBzaG93RXJyb3IoJ2xldmVsIG5vdCBzZWxlY3RlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZsYWcgPSAwO1xyXG4gICAgbGV0IHJhZGlvU2hpcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW9TaGlydCcpO1xyXG4gICAgcmFkaW9TaGlydC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgR0xPQkFMUy5waWN0dXJlID0gZWxlbWVudC52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgIGlmIChmbGFnID09IDApIHtcclxuICAgICAgICBzaG93RXJyb3IoJ3NoaXJ0IG5vdCBzZWxlY3RlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbn1cclxuLy8vIHN0b3AgZ2FtZSBhbmQgcmV0dXJuIHRvIHdlbGNvbWUtcGFydFxyXG5cclxuZnVuY3Rpb24gc3RvcEdhbWUoKSB7XHJcbiAgICB0b2dnbGVHYW1lV2luZG93KCk7XHJcbiAgICB0b2dnbGVXZWxjb21lUGFydCgpO1xyXG4gICAgY2xlYXJJbnRlcnZhbChHTE9CQUxTLmludGVydmFsKTtcclxuICAgIEdMT0JBTFMuc2Vjb25kID0gMDtcclxuICAgIEdMT0JBTFMubWludXRlID0gMDtcclxuICAgIEdMT0JBTFMudGltZXIuaW5uZXJIVE1MID0gR0xPQkFMUy5taW51dGUgKyBcIiBtaW5zIFwiICsgR0xPQkFMUy5zZWNvbmQgKyBcIiBzZWNzXCI7XHJcbiAgICBHTE9CQUxTLm5ld2dhbWUuY2xlYW5VcCgpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIGxvY2FsU3RvcmFnZVsndG9wMTAnXSA9PSBcInVuZGVmaW5lZFwiKSBsb2NhbFN0b3JhZ2VbJ3RvcDEwJ10gPSBKU09OLnN0cmluZ2lmeShHTE9CQUxTLnRvcDEwKTtcclxuXHJcbkdMT0JBTFMudG9wMTAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsndG9wMTAnXSk7XHJcblxyXG5kcmF3VG9wMTAoMTApO1xyXG5cclxuLy9oaWRlIGdhbWUgd2luZG93IGF0IHN0YXJ0XHJcbnRvZ2dsZUdhbWVXaW5kb3coKTtcclxuXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVHYW1lV2luZG93KCkge1xyXG4gICAgbGV0IGVsZW1HYW1lV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtd2luZG93Jyk7XHJcbiAgICBlbGVtR2FtZVdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVXZWxjb21lUGFydCgpIHtcclxuICAgIGxldCBlbGVtV2VsY29tZVBhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZS1wYXJ0Jyk7XHJcbiAgICBlbGVtV2VsY29tZVBhcnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcclxuICAgIEdMT0JBTFMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgR0xPQkFMUy50aW1lci5pbm5lckhUTUwgPSBHTE9CQUxTLm1pbnV0ZSArIFwiIG1pbnMgXCIgKyBHTE9CQUxTLnNlY29uZCArIFwiIHNlY3NcIjtcclxuICAgICAgICBHTE9CQUxTLnNlY29uZCsrO1xyXG4gICAgICAgIGlmIChHTE9CQUxTLnNlY29uZCA9PSA2MCkge1xyXG4gICAgICAgICAgICBHTE9CQUxTLm1pbnV0ZSsrO1xyXG4gICAgICAgICAgICBHTE9CQUxTLnNlY29uZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChHTE9CQUxTLm1pbnV0ZSA9PSA2MCkge1xyXG4gICAgICAgICAgICBob3VyKys7XHJcbiAgICAgICAgICAgIEdMT0JBTFMubWludXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dFcnJvcihtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVzc2FnZURpdi5jbGFzc05hbWUgPSBcImVycm9yTWVzc2FnZVwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlKTtcclxuICAgIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBsZXQgbWFpbkVsZW1lbnRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYgLnJ1bGVzXCIpO1xyXG4gICAgbWFpbkVsZW1lbnRJZC5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1lc3NhZ2VEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZXNzYWdlRGl2KVxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImxldCBHTE9CQUxTID0ge1xyXG4gICAgc2Vjb25kOiAwLFxyXG4gICAgbWludXRlOiAwLFxyXG4gICAgdGltZXI6IHt9LFxyXG4gICAgaW50ZXJ2YWw6IHt9LFxyXG4gICAgcGljdHVyZTogMCxcclxuICAgIG51bWJlcjogMCxcclxuICAgIG5ld2dhbWU6IHt9LFxyXG4gICAgdG9wMTA6IFtdXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==