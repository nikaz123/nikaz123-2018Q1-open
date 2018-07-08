 class TaskExtraWords {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskExtraWords.html));

        this.answerfield=document.getElementById("answerTaskExtraWords");
        this.task=document.querySelector(".task.taskExtraWords");


        this.words=TaskExtraWords.words;


        this.renderTask();
    }



    renderTask() {
        this.answerfield.value = '';

        this.answerExtraWords =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////неправильное слово

        this.wordTaskExtraWordsArray = this.words[this.answerExtraWords];  // массив

        this.task.innerText=this.wordTaskExtraWordsArray.join(' ');

    }

}

export default TaskExtraWords;