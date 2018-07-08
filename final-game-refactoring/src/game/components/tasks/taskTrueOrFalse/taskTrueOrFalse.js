class TaskTrueOrFalse {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskTrueOrFalse.html));

        this.answerfield = document.getElementById("answerTrueOrFalse");
        this.task = document.querySelector(".task.TrueOrFalse");


        this.words = TaskTrueOrFalse.words;


        this.renderTask();
    }

    renderTask() {

        this.answerfield.value = '';

        this.answerTrueOrFalse = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];   ////загадка

        this.wordTaskTrueOrFalse = this.words[this.answerTrueOrFalse];  //  ////true or false

        this.task.innerText = this.answerTrueOrFalse; //.join(' ');
    }

}

export default TaskTrueOrFalse;