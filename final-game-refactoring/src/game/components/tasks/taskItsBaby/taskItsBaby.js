class TaskItsBaby {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskItsBaby.html));

        this.answerfield=document.getElementById("answerItsBaby");
        this.task=document.querySelector(".task.ItsBaby");


        this.words=TaskItsBaby.words;


        this.renderTask();
    }



    renderTask() {

        this.answerfield.value = '';

        this.answerItsBaby =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];

        this.wordItsBabyArray = this.words[this.answerItsBaby];

        this.task.innerText=this.wordItsBabyArray;
    }

}

export default TaskItsBaby;