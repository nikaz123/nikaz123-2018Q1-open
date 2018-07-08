class TaskWordsAudio {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskWordsAudio.html));

        this.answerfield = document.getElementById("answerWord");
        this.task = document.querySelector(".task.Word");
        this.words = TaskWordsAudio.words;


        this.renderTask();
    }


    renderTask() {
        this.word = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];

    }

}

export default TaskWordsAudio;