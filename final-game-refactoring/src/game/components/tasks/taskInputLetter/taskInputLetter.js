class TaskInputLetter {

    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskInputLetter.html));

        this.answerfield = document.getElementById("answerTaskInputLetter");
        this.task = document.querySelector(".task.taskInputLetter");


        this.words = TaskInputLetter.words;


        this.renderTask();
    }


    renderTask() {
        this.answerfield.value = '';

        this.answerInputLetter = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////неправильное слово

        this.wordTaskInputLetterArray = this.words[this.answerInputLetter];  // массив

        this.task.innerText = this.wordTaskInputLetterArray.join(' ');

    }

}


export default TaskInputLetter;