class TaskAntonym {

    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskAntonym.html));

        this.answerfield=document.getElementById("answerTaskAntonym");
        this.task=document.querySelector(".task.taskAntonym");


        this.words=TaskAntonym.words;


        this.renderTask();
    }




    renderTask() {
        this.answerfield.value = '';

        this.answerAntonym =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////неправильное слово

        this.wordTaskAntonymArray = this.words[this.answerAntonym];  // массив

        this.task.innerText=this.wordTaskAntonymArray.join(' ');

    }

}


export default TaskAntonym;