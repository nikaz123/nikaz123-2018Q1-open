class TaskWordTranslate {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskWordTranslate.html));

        this.answerfield = document.getElementById("answerWordTranslate");

        this.task = document.querySelector(".task.WordTranslate");


        this.words = TaskWordTranslate.words;


        this.renderTask();
    }


    renderTask() {
        this.answerfield.value = '';

        this.wordTranslate = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  // random word from array

        this.answerWordTranslateArray = this.words[this.wordTranslate];

        this.task.innerText = this.wordTranslate;

    }

}

export default TaskWordTranslate;