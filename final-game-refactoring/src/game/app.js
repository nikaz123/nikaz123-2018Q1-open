import {Home} from "./components/index";
import {Login} from "./components/index";
import {Battle} from "./components/index";
import {Hero} from "./components/index";
import {DrawMonster} from "./components/index";
import {TaskNumbers} from "./components/index";
import  {TaskRandomMathOperation} from "./components/index";
import {TaskWordsAudio} from  "./components/index";
import {TaskTrueOrFalse} from "./components/index";
import {TaskWordTranslate} from "./components/index";
import {TaskLetterShuffle} from "./components/index";
import {TaskAnimalTasks} from "./components/index";
import {TaskExtraWords}  from "./components/index";
import {TaskNextNumber} from "./components/index";
import {TaskAntonym} from "./components/index";
import {TaskInputLetter} from "./components/index";
import {TaskCapitals} from "./components/index";
import {TaskFinishTheSentence}   from "./components/index";
import {TaskAuthorOfBook}   from "./components/index";
import {TaskItsBaby}   from "./components/index";
import {DrawSpell} from "./components/index";
import "./app.less";
import {BattleWinWindow} from "./components/index";
import {TableResults} from "./components/index";



import  spell1 from "./components/drawSpell/resourses/sounds/spell1.wav";
import  spell2 from "./components/drawSpell/resourses/sounds/spell2.wav";
import  spell3 from "./components/drawSpell/resourses/sounds/spell3.wav";
import  spell4 from "./components/drawSpell/resourses/sounds/spell4.wav";
import  spell5 from "./components/drawSpell/resourses/sounds/spell5.wav";
import  spell6 from "./components/drawSpell/resourses/sounds/spell6.wav";

class App {
    constructor() {
        this.home = new Home();
        this.login = new Login();
        this.battle = new Battle();
        this.taskNumbers = new TaskNumbers();
        this.taskWordsAudio=new TaskWordsAudio();
        this.taskRandomMathOperation=new TaskRandomMathOperation();
        this.taskWordTranslate = new  TaskWordTranslate();
        this.taskLettesShuffle = new TaskLetterShuffle();
        this.taskAnimalTasks = new TaskAnimalTasks();
        this.taskExtraWords = new TaskExtraWords();
        this.taskNextNumber = new TaskNextNumber();
        this.taskAntonym = new TaskAntonym();
        this.taskInputLetter = new TaskInputLetter();
        this.taskCapitals = new TaskCapitals();
        this.taskFinishTheSentence = new TaskFinishTheSentence();
        this.taskAuthorOfBook = new TaskAuthorOfBook();
        this.taskItsBaby = new TaskItsBaby();
        this.taskTrueOrFalse=new TaskTrueOrFalse();
        this.battleWinWindow = new BattleWinWindow();
        this.tableResults = new TableResults();
    }

    run() {
        this.home.run();
        this.login.run();
        this.battle.run();
        this.battleWinWindow.run();


//////////CONSTANTS
        const WATER_SPELL = 1;
        const FIRE_SPELL = 2;
        const SLIME_SPELL = 3;
        const LIGHT_SPELL = 4;
        const PLAZMA_SPELL = 5;
        const MONSTER_SPELL = 6;
        const TOTAL_COUNT = 5;
        const WIN_COUNT = 3;


///////////////////window with input data

        let drawmonster, drawHero, result, cor_count = 0, wrong_count = 0, monster_count = 0, spell = 1,
            last_wrong_count = 0,
            last_spell = 1;



       // let sounds = [new Audio(spell1), new Audio('components/drawSpell/resourses/sounds/spell2.wav'), new Audio('components/drawSpell/resourses/sounds/spell3.wav'), new Audio('components/drawSpell/resourses/sounds/spell4.wav'), new Audio('components/drawSpell/resourses/sounds/spell5.wav'), new Audio('components/drawSpell/resourses/sounds/spell6.wav')];
        let sounds = [new Audio(spell1), new Audio(spell2), new Audio(spell3), new Audio(spell4), new Audio(spell5), new Audio(spell6)];



////////TABLE RESULTS

        function drawTableRecords() {
            let elementTableResults = document.getElementById('tableResults');
            elementTableResults.innerHTML = '';
            let tableResults = new TableResults(ATtop5);
            elementTableResults.appendChild(tableResults.createTable());
        }

        function rangelimit(a, range) {
            return a > range ? range : a
        }

        function updateHealth() {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    let full_width = document.getElementsByClassName('healthContainer')[0].offsetWidth;
                    document.getElementById("monsterHealth").style.width = (full_width - (full_width / 3 * (rangelimit(cor_count, 3)))) + "px";
                    document.getElementById("heroHealth").style.width = (full_width - (full_width / 3 * (rangelimit(wrong_count, 3)))) + "px";
                    resolve();
                }, 500);
            });
        }


        function castSpell() {
            return new Promise((resolve, reject) => {
                if (wrong_count != last_wrong_count) {
                    last_wrong_count = wrong_count;
                    if (spell != MONSTER_SPELL) last_spell = spell;
                    spell = MONSTER_SPELL;
                } else {
                    spell = last_spell;
                }
                let elementCanvasForSpell = document.getElementById('canvasForSpell');
                let newSpell = new DrawSpell(elementCanvasForSpell, spell);
                sounds[spell - 1].play();
                resolve();

            });
        }

        function pushTop10(pcount) {
            let top_record =
                {
                    atname: localStorage['firstNameInput'],
                    atscore: pcount
                };
            ATtop5.push(top_record);
            ATtop5.sort(sortByScore);
            ATtop5 = ATtop5.slice(0, 5);
            localStorage['ATtop5'] = JSON.stringify(ATtop5);
        }


        function winnerGameOver(taskElement, renderTaskCallback) {
            castSpell()
                .then(updateHealth)
            if (cor_count + wrong_count == TOTAL_COUNT || cor_count == WIN_COUNT || wrong_count == WIN_COUNT) {
                if (cor_count > wrong_count) {
                    toggleWinnerWindow(taskElement).then(() => {
                        monster_count++;
                    })
                }
                else {
                    let elementGameOverWindow = document.getElementById('gameover-window');
                    elementGameOverWindow.classList.toggle('hide');
                    taskElement.classList.toggle('hide');
                    pushTop10(monster_count);
                    monster_count = 0;
                    drawTableRecords();
                }
                cor_count = 0;
                wrong_count = 0;
                last_wrong_count = 0;
                last_spell = 1;

                wrong.innerText = '0';
                correct.innerText = '0';

                wrongRandomMathOperation.innerText = '0';
                correctRandomMathOperation.innerText = '0';

                correctWordTranslate.innerText = '0';
                wrongWordTranslate.innerText = '0';


                correctWordsAudio.innerText = '0';
                wrongWordsAudio.innerText = '0';

                wrongLetterShuffle.innerText = '0';
                correctLetterShuffle.innerText = '0';

                correctAnimalTasks.innerText = '0';
                wrongAnimalTasks.innerText = '0';

                correctExtraWords.innerText = '0';
                wrongExtraWords.innerText = '0';

                correctNextNumber.innerText = '0';
                wrongNextNumber.innerText = '0';

                correctAntonym.innerText = '0';
                wrongAntonym.innerText = '0';

                correctInputLetter.innerText = '0';
                wrongInputLetter.innerText = '0';

                correctTrueOrFalse.innerText = '0';
                wrongTrueOrFalse.innerText = '0';

                correctCapitals.innerText = '0';
                wrongCapitals.innerText = '0';

                correctFinishTheSentence.innerText = '0';
                wrongFinishTheSentence.innerText = '0';

                correctAuthorOfBook.innerText = '0';
                wrongAuthorOfBook.innerText = '0';

                correctItsBaby.innerText = '0';
                wrongItsBaby.innerText = '0';

                updateHealth();
            }

            setTimeout(renderTaskCallback, 1000);
        }




        let ATtop5 = [];

        if (typeof localStorage['ATtop5'] == "undefined") localStorage['ATtop5'] = JSON.stringify(ATtop5);

        ATtop5 = JSON.parse(localStorage['ATtop5']);

        function sortByScore(a, b) {
            return a.atscore < b.atscore ? 1 : -1;

        }




        let buttonNext = document.getElementById('btnNext');
        buttonNext.addEventListener("click", startToInputData);
        buttonNext.addEventListener("keypress", startToInputData);


        function startToInputData(e) {
            e.preventDefault();
            toggleWindowHistoryOfGameEvents();
            toggleWindowInputData();
        }


        function toggleWindowHistoryOfGameEvents() {
            let elementHistoryOfGameEvents = document.getElementById('historyOfGameEvents');
            elementHistoryOfGameEvents.classList.toggle('hide');
        }

        function toggleWindowInputData() {
            let elementWindowData = document.getElementById('options-form');
            elementWindowData.classList.toggle('hide');
        }


        function toggleWinnerWindow(task_element) {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    let elementWinnerWindow = document.getElementById('winner-window');
                    elementWinnerWindow.classList.toggle('hide');
                    task_element.classList.toggle('hide');
                    resolve()
                }, 2000)
            })
        }

        //////////////////begin game window

        let buttonBeginGame = document.getElementById('begin-btn');
        buttonBeginGame.addEventListener('click', startGame);
        buttonBeginGame.addEventListener('keypress', startGame);

        function startGame(e) {
            e.preventDefault();
            if (!validateGameConfig()) return;
            toggleWindowInputData();
            toggleGameWindow();


            /////DrawHero
            let canvasHero = document.getElementById('canvasForHero');
            drawHero = new Hero(canvasHero, showBattleWin);

            ////////DrawMonster
            let canvas = document.getElementById('canvasForMonster');
            drawmonster = new DrawMonster(canvas);
        }


        function toggleGameWindow() {
            let elementWindowGame = document.getElementById('game-window');
            elementWindowGame.classList.toggle('hide');
        }

        /////////////////////////////////////////////// validation

        function validateGameConfig() {
            if (document.getElementById('firstNameInput').value == '') {
                showError('введи имя');
                return false;
            }
            localStorage['firstNameInput'] = document.getElementById('firstNameInput').value;

            if (document.getElementById('passwordInput').value == '') {
                showError('введи пароль');
                return false;
            }
            localStorage['passwordInput'] = document.getElementById('passwordInput').value;

            return true;
        }

        function showError(message) {
            let messageDiv = document.createElement('div');
            messageDiv.className = "errorMessage";
            let content = document.createTextNode(message);
            messageDiv.appendChild(content);
            let mainElementId = document.querySelector("form.options-form");
            mainElementId.appendChild(messageDiv);
            setTimeout(function () {
                messageDiv.parentNode.removeChild(messageDiv)
            }, 1000);

        }

        ///////////////show battle begin message


        function showBattleWin() {
            let elementWindowSpell = document.getElementById('window-spell');
            elementWindowSpell.classList.toggle('hide');
        }


        /////////////////
        const root = document.querySelector('.modalWindowofTask');



        function spellSelectHandler (event)  {
        let target = event.target;

            if (target.classList.contains('taskMath')) {
                let theid = target.getAttribute('id');

                if (theid == 'taskMath') {
                    let elementTaskMath = document.getElementById('window-taskMath');
                    elementTaskMath.classList.toggle('hide');



                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = WATER_SPELL;
                }

                if (theid == 'taskRandomMathOperation') {

                    let elementTaskMath = document.getElementById('window-taskMathRandomOperation');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = FIRE_SPELL;
                }

                if (theid == 'taskWordsAudio') {

                    let elementTaskMath = document.getElementById('window-taskWordsAudio');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = SLIME_SPELL;
                }

                if (theid == 'taskWordTranslate') {

                    let elementTaskMath = document.getElementById('window-taskWordTranslate');
                    elementTaskMath.classList.toggle('hide');


                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = LIGHT_SPELL;
                }

                if (theid == 'taskLettersShuffle') {

                    let elementTaskMath = document.getElementById('window-taskWordLettersShuffle');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                   spell = PLAZMA_SPELL;
                }


                if (theid == 'taskAnimalTasks') {

                    let elementTaskMath = document.getElementById('window-taskAnimalTasks');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = WATER_SPELL;
                }

                if (theid == 'taskExtraWords') {

                    let elementTaskMath = document.getElementById('window-taskExtraWords');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = FIRE_SPELL;
                }

                if (theid == 'taskNextNumber') {

                    let elementTaskMath = document.getElementById('window-taskNextNumber');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = SLIME_SPELL;
                }

                if (theid == 'taskAntonym') {

                    let elementTaskMath = document.getElementById('window-taskAntonym');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = LIGHT_SPELL;
                }

                if (theid == 'taskInputLetter') {

                    let elementTaskMath = document.getElementById('window-taskInputLetter');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = PLAZMA_SPELL;
                }

                if (theid == 'taskCapitals') {

                    let elementTaskMath = document.getElementById('window-taskCapitals');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = WATER_SPELL;
                }


                if (theid == 'taskFinishTheSentence') {

                    let elementTaskMath = document.getElementById('window-taskFinishTheSentence');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = FIRE_SPELL;
                }

                if (theid == 'taskAuthorOfBook') {

                    let elementTaskMath = document.getElementById('window-taskAuthorOfBook');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =SLIME_SPELL;
                }

                if (theid == 'taskItsBaby') {

                    let elementTaskMath = document.getElementById('window-taskItsBaby');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                   spell = LIGHT_SPELL;
                }

                if (theid == 'taskTrueOrFalse') {

                    let elementTaskMath = document.getElementById('window-taskTrueOrFalse');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask = document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell = PLAZMA_SPELL;
                }

                last_spell = spell;
            }

        };

        const  ENTER_BTN = 13;

        root.addEventListener('click',spellSelectHandler);
        root.addEventListener('keypress', (event) => {
            let myevent={}
             myevent.target = event.target.parentElement.previousElementSibling;

            if (event.keyCode ==  ENTER_BTN) {
                spellSelectHandler(myevent)

            }


        });



/////// btn ОТЛИЧНО


        let ebtnNewGameWinner = document.getElementById('btnNewGameWinner');

        ebtnNewGameWinner.focus();

        ebtnNewGameWinner.addEventListener('click', newMonster);
        //ebtnNewGameWinner.addEventListener('keypress', newMonster);

        let ebtnNewGameGameover = document.getElementById('btnNewGameGameover');

        ebtnNewGameGameover.focus();

        ebtnNewGameGameover.addEventListener('click', newMonster);
        //ebtnNewGameGameover.addEventListener('keypress', newMonster);



        function newMonster(event) {


            if (event.target.getAttribute('id') == 'btnNewGameWinner') {

                let elementNewMonster = document.getElementById('winner-window');
                elementNewMonster.classList.toggle('hide');

            }

            if (event.target.getAttribute('id') == 'btnNewGameGameover') {


                let elementNewMonster2 = document.getElementById('gameover-window');
                elementNewMonster2.classList.toggle('hide');

            }
            drawmonster.initMonster();
            drawHero.initeHero();
        }


///////////////////   controllerTaskLetterShuffle

        let taskLetterShuffle = document.querySelector('.WordLettersShuffle');
        let buttonCheckWord = document.getElementById('btnCheckWord');
        let correctLetterShuffle = document.querySelector('#window-taskWordLettersShuffle .correct-ans');
        let wrongLetterShuffle = document.querySelector('#window-taskWordLettersShuffle .wrong-ans');

        let newTaskLetterShuffle = this.taskLettesShuffle;


        buttonCheckWord.addEventListener('click', e => {

            let wordok = false;
            let stringtocheck = '';
            Array.from(sortable.getElementsByTagName("li")).forEach((a) => {
                stringtocheck += a.innerText
            });

            wordok = (stringtocheck == newTaskLetterShuffle.wordShuffle);

            if (wordok) {


                cor_count++;
                correctLetterShuffle.innerText = cor_count;
            } else {

                wrong_count++;
                wrongLetterShuffle.innerText = wrong_count;
            }


            winnerGameOver(document.getElementById('window-taskWordLettersShuffle'), newTaskLetterShuffle.renderTask);


        });

        /////////////////////////////////controller TaskNumbers
        let answer = document.querySelector('#answerNumber');
        let task = document.querySelector('.task');
        let correct = document.querySelector('.correct-ans');
        let wrong = document.querySelector('.wrong-ans');


        let newTaskNumber = this.taskNumbers;

        answer.addEventListener('keypress', e => {
            if (e.code == 'Enter' && answer.value != '') {
                let answ = task.innerText.split('*');
                answ = answ[0] * answ[1];
                if (answ == answer.value) {

                    cor_count++;
                    correct.innerText = cor_count;
                } else {

                    wrong_count++;
                    wrong.innerText = wrong_count;
                }
                answer.value = '';

                winnerGameOver(document.getElementById('window-taskMath'), newTaskNumber.renderTask);

            }
        });


                ////////////////////////////controllerRandomMathOperation
                let answerRandomMathOperation = document.querySelector('#answerMathRandomOperation');
                let taskRandomMathOperation = document.querySelector('.MathRandomOperation');
                let correctRandomMathOperation = document.querySelector('#window-taskMathRandomOperation .correct-ans');
                let wrongRandomMathOperation = document.querySelector('#window-taskMathRandomOperation .wrong-ans');


                let newTaskRandomMathOperation = this.taskRandomMathOperation;


                answerRandomMathOperation.addEventListener('keypress', e => {
                    if (e.code == 'Enter' && answerRandomMathOperation.value != '') {


                        let answ = answerRandomMathOperation.value;


                        if (answ == newTaskRandomMathOperation.answer) {

                            cor_count++;
                            correctRandomMathOperation.innerText = cor_count;
                        } else {

                            wrong_count++;
                            wrongRandomMathOperation.innerText = wrong_count;
                        }

                        answerRandomMathOperation.value = '';


                        winnerGameOver(document.getElementById('window-taskMathRandomOperation'), newTaskRandomMathOperation.renderTask);
                    }

                });

                        //////////////////////////////controller TaskWordsAudio
                        let answerWordsAudio = document.querySelector('#answerWord');
                        let taskWordsAudio = document.querySelector('.Word');
                        let correctWordsAudio = document.querySelector('#window-taskWordsAudio .correct-ans');
                        let wrongWordsAudio = document.querySelector('#window-taskWordsAudio .wrong-ans');

                        let elementPlayAudio = document.createElement('button');
                        elementPlayAudio.id = 'playAudio';
                        elementPlayAudio.textContent = 'Прослушай слово и запиши его';
                        taskWordsAudio.appendChild(elementPlayAudio);


                      let newTaskWordsAudio = this.taskWordsAudio;


                        elementPlayAudio.addEventListener('click', (event) => {
                                let msg = new SpeechSynthesisUtterance(newTaskWordsAudio.word);
                                msg.lang = 'en-US';
                                window.speechSynthesis.speak(msg);
                            }
                        );

                        answerWordsAudio.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerWordsAudio.value != '') {

                                let answ = answerWordsAudio.value.toLowerCase();

                                if (answ == newTaskWordsAudio.word) {

                                    cor_count++;
                                    correctWordsAudio.innerText = cor_count;
                                } else {

                                    wrong_count++;
                                    wrongWordsAudio.innerText = wrong_count;
                                }
                                answerWordsAudio.value = '';

                                winnerGameOver(document.getElementById('window-taskWordsAudio'), newTaskWordsAudio.renderTask);
                            }

                        });


                        /////////////////////////controller TaskWordTranslate


                        let answerWordTranslate = document.querySelector('#answerWordTranslate');
                        let taskWordTranslate = document.querySelector('.WordTranslate');
                        let correctWordTranslate = document.querySelector('#window-taskWordTranslate .correct-ans');
                        let wrongWordTranslate = document.querySelector('#window-taskWordTranslate .wrong-ans');
                        let newTaskWordTranslate = this.taskWordTranslate;


                        answerWordTranslate.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerWordTranslate.value != '') {
                                let answ = answerWordTranslate.value.toLowerCase();

                                if (newTaskWordTranslate.answerWordTranslateArray.indexOf(answ) > -1) {

                                    cor_count++;
                                    correctWordTranslate.innerText = cor_count;
                                } else {

                                    wrong_count++;
                                    wrongWordTranslate.innerText = wrong_count;
                                }
                                answerWordTranslate.value = '';

                                winnerGameOver(document.getElementById('window-taskWordTranslate'), newTaskWordTranslate.renderTask);
                            }
                        });

                      /////////////////////////controller TaskAnimalTasks


                        let answerAnimalTasks = document.querySelector('#answerTaskAnimalTasks');
                        let taskAnimalTasks = document.querySelector('.taskAnimalTasks');
                        let correctAnimalTasks = document.querySelector('#window-taskAnimalTasks .correct-ans');
                        let wrongAnimalTasks = document.querySelector('#window-taskAnimalTasks .wrong-ans');

                        let newTaskAnimalTasks = this.taskAnimalTasks;


                        answerAnimalTasks.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerAnimalTasks.value != '') {

                                let answ = answerAnimalTasks.value.toLowerCase();

                                if (answ == newTaskAnimalTasks.answerWordTasksAnimalString) {

                                    cor_count++;
                                    correctAnimalTasks.innerText = cor_count;
                                } else {

                                    wrong_count++;
                                    wrongAnimalTasks.innerText = wrong_count;
                                }
                                answerAnimalTasks.value = '';

                                winnerGameOver(document.getElementById('window-taskAnimalTasks'), newTaskAnimalTasks.renderTask);
                            }

                        });

                       ////////////////////////TaskExtraWords
                        let answerExtraWords = document.querySelector('#answerTaskExtraWords');
                        let taskExtraWords = document.querySelector('.taskExtraWords');
                        let correctExtraWords = document.querySelector('#window-taskExtraWords .correct-ans');
                        let wrongExtraWords = document.querySelector('#window-taskExtraWords .wrong-ans');

                        let newTaskExtraWords = this.taskExtraWords;

                        answerExtraWords.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerExtraWords.value != '') {

                                let answ = answerExtraWords.value.toLowerCase();

                                if (newTaskExtraWords.wordTaskExtraWordsArray.indexOf(answ) > -1) {
                                    //newTaskExtraWords.checker('true');
                                    cor_count++;
                                    correctExtraWords.innerText = cor_count;
                                } else {
                                    //newTaskExtraWords.checker('false');
                                    wrong_count++;
                                    wrongExtraWords.innerText = wrong_count;
                                }

                                answerExtraWords.value = '';

                                winnerGameOver(document.getElementById('window-taskExtraWords'), newTaskExtraWords.renderTask);
                            }

                        });
                        ////////////////////////TaskNextNumber

                        let answerNextNumber = document.querySelector('#answerTaskNextNumber');
                        let taskNextNumber = document.querySelector('.taskNextNumber');
                        let correctNextNumber = document.querySelector('#window-taskNextNumber .correct-ans');
                        let wrongNextNumber = document.querySelector('#window-taskNextNumber .wrong-ans');

                        let newTaskNextNumber = this.taskNextNumber;


                        answerNextNumber.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerNextNumber.value != '') {

                                let answ = answerNextNumber.value.toLowerCase();

                                if (answ == newTaskNextNumber.answerNextNumber) {

                                    cor_count++;
                                    correctNextNumber.innerText = cor_count;
                                } else {

                                    wrong_count++;
                                    wrongNextNumber.innerText = wrong_count;
                                }

                                answerNextNumber.value = '';

                                winnerGameOver(document.getElementById('window-taskNextNumber'), newTaskNextNumber.renderTask);
                            }

                        });

                        ////////////////////////TaskAntonym

                        let answerAntonym = document.querySelector('#answerTaskAntonym');
                        let taskAntonym = document.querySelector('.taskAntonym');
                        let correctAntonym = document.querySelector('#window-taskAntonym .correct-ans');
                        let wrongAntonym = document.querySelector('#window-taskAntonym .wrong-ans');

                        let newTaskAntonym =this.taskAntonym;


                        answerAntonym.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerAntonym.value != '') {

                                let answ = answerAntonym.value.toLowerCase();

                                if (answ == newTaskAntonym.answerAntonym) {

                                    cor_count++;
                                    correctAntonym.innerText = cor_count;
                                } else {

                                    wrong_count++;
                                    wrongAntonym.innerText = wrong_count;
                                }

                                answerAntonym.value = '';

                                winnerGameOver(document.getElementById('window-taskAntonym'), newTaskAntonym.renderTask);
                            }

                        });

                      ////////////////////////TaskInputLetter

                        let answerInputLetter = document.querySelector('#answerTaskInputLetter');
                        let taskInputLetter = document.querySelector('.taskInputLetter');
                        let correctInputLetter = document.querySelector('#window-taskInputLetter .correct-ans');
                        let wrongInputLetter = document.querySelector('#window-taskInputLetter .wrong-ans');

                        let newTaskInputLetter = this.taskInputLetter;


                        answerInputLetter.addEventListener('keypress', e => {
                            if (e.code == 'Enter' && answerInputLetter.value != '') {

                                let answ = answerInputLetter.value.toLowerCase();

                                if (answ == newTaskInputLetter.answerInputLetter) {

                                    cor_count++;
                                    correctInputLetter.innerText = cor_count;
                                } else {

                                    wrong_count++;
                                    wrongInputLetter.innerText = wrong_count;
                                }

                                answerInputLetter.value = '';

                                winnerGameOver(document.getElementById('window-taskInputLetter'), newTaskInputLetter.renderTask);
                            }

                        });

////////////////////////TaskTrueOrFalse

        let answerTrueOrFalse = document.querySelector('#answerTrueOrFalse');
        let taskTrueOrFalse= document.querySelector('.taskTrueOrFalse');
        let correctTrueOrFalse = document.querySelector('#window-taskTrueOrFalse .correct-ans');
        let wrongTrueOrFalse = document.querySelector('#window-taskTrueOrFalse .wrong-ans');

       let newTaskTrueOrFalse = this.taskTrueOrFalse;


        answerTrueOrFalse.addEventListener('keypress', e => {
            if (e.code == 'Enter' && answerTrueOrFalse.value != '') {

                let answ = answerTrueOrFalse.value.toLowerCase();

                if (answ == newTaskTrueOrFalse.wordTaskTrueOrFalse) {

                    cor_count++;
                    correctTrueOrFalse.innerText = cor_count;
                } else {

                    wrong_count++;
                    wrongTrueOrFalse.innerText = wrong_count;
                }

                answerTrueOrFalse.value = '';

                winnerGameOver(document.getElementById('window-taskTrueOrFalse'),  newTaskTrueOrFalse.renderTask);
            }

        });

      //////////////////Capitals
        let answerCapitals = document.querySelector('#answerCapitals');
        let taskCapitals = document.querySelector('.taskCapitals');
        let correctCapitals = document.querySelector('#window-taskCapitals .correct-ans');
        let wrongCapitals = document.querySelector('#window-taskCapitals .wrong-ans');

        let newTaskCapitals = this.taskCapitals;


        answerCapitals.addEventListener('keypress', e => {
            if (e.code == 'Enter' && answerCapitals.value != '') {

                let answ = answerCapitals.value.toLowerCase();

                if (answ == newTaskCapitals.answerCapitals) {

                    cor_count++;
                    correctCapitals.innerText = cor_count;
                } else {

                    wrong_count++;
                    wrongCapitals.innerText = wrong_count;
                }

                answerCapitals.value = '';

                winnerGameOver(document.getElementById('window-taskCapitals'), newTaskCapitals.renderTask);
            }

        });

//////////////////FinishTheSentence
        let answerFinishTheSentence = document.querySelector('#answerFinishTheSentence');
        let taskFinishTheSentence = document.querySelector('.taskFinishTheSentence');
        let correctFinishTheSentence = document.querySelector('#window-taskFinishTheSentence .correct-ans');
        let wrongFinishTheSentence = document.querySelector('#window-taskFinishTheSentence .wrong-ans');

        let newTaskFinishTheSentence = this.taskFinishTheSentence;


        answerFinishTheSentence.addEventListener('keypress', e => {
            if (e.code == 'Enter' && answerFinishTheSentence.value != '') {

                let answ = answerFinishTheSentence.value.toLowerCase();

                if (answ == newTaskFinishTheSentence.answerFinishTheSentence) {

                    cor_count++;
                    correctFinishTheSentence.innerText = cor_count;
                } else {

                    wrong_count++;
                    wrongFinishTheSentence.innerText = wrong_count;
                }

                answerFinishTheSentence.value = '';

                winnerGameOver(document.getElementById('window-taskFinishTheSentence'), newTaskFinishTheSentence.renderTask);
            }

        });


//////////////////AuthorOfBook
        let answerAuthorOfBook = document.querySelector('#answerAuthorOfBook');
        let taskAuthorOfBook = document.querySelector('.taskAuthorOfBook');
        let correctAuthorOfBook = document.querySelector('#window-taskAuthorOfBook .correct-ans');
        let wrongAuthorOfBook = document.querySelector('#window-taskAuthorOfBook .wrong-ans');

        let newTaskAuthorOfBook = this.taskAuthorOfBook;


        answerAuthorOfBook.addEventListener('keypress', e => {
            if (e.code == 'Enter' && answerAuthorOfBook.value != '') {

                let answ = answerAuthorOfBook.value.toLowerCase();

                if (answ == newTaskAuthorOfBook.answerAuthorOfBook) {

                    cor_count++;
                    correctAuthorOfBook.innerText = cor_count;
                } else {

                    wrong_count++;
                    wrongAuthorOfBook.innerText = wrong_count;
                }

                answerAuthorOfBook.value = '';

                winnerGameOver(document.getElementById('window-taskAuthorOfBook'), newTaskAuthorOfBook.renderTask);
            }

        });

//////////////////ItsBaby
        let answerItsBaby = document.querySelector('#answerItsBaby');
        let taskItsBaby = document.querySelector('.taskItsBaby');
        let correctItsBaby = document.querySelector('#window-taskItsBaby .correct-ans');
        let wrongItsBaby = document.querySelector('#window-taskItsBaby .wrong-ans');

        let newTaskItsBaby = this.taskItsBaby;


        answerItsBaby.addEventListener('keypress', e => {
            if (e.code == 'Enter' && answerItsBaby.value != '') {

                let answ = answerItsBaby.value.toLowerCase();

                if (answ == newTaskItsBaby.answerItsBaby) {

                    cor_count++;
                    correctItsBaby.innerText = cor_count;
                } else {

                    wrong_count++;
                    wrongItsBaby.innerText = wrong_count;
                }

                answerItsBaby.value = '';

                winnerGameOver(document.getElementById('window-taskItsBaby'), newTaskItsBaby.renderTask);
            }

        });

    }

}

export {App};
