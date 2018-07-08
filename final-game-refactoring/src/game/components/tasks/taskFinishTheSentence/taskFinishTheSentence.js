class TaskFinishTheSentence {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskFinishTheSentence.html));

        this.answerfield = document.getElementById("answerFinishTheSentence");
        this.task = document.querySelector(".task.FinishTheSentence");


        this.words = TaskFinishTheSentence.words;


        this.renderTask();
    }

    renderTask() {

        this.answerfield.value = '';

        this.answerFinishTheSentence = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];

        this.wordFinishTheSentenceArray = this.words[this.answerFinishTheSentence];

        this.task.innerText = this.wordFinishTheSentenceArray;
    }

}

export default TaskFinishTheSentence;