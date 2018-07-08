class TaskNextNumber {

    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskNextNumber.html));

        this.answerfield = document.getElementById("answerTaskNextNumber");
        this.task = document.querySelector(".task.taskNextNumber");


        this.words = TaskNextNumber.words;


        this.renderTask();
    }

    renderTask() {
        this.answerfield.value = '';

        this.answerNextNumber = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////неправильное слово

        this.wordTaskNextNumberArray = this.words[this.answerNextNumber];  // массив

        this.task.innerText = this.wordTaskNextNumberArray.join(' ');

    }

}


export default TaskNextNumber;