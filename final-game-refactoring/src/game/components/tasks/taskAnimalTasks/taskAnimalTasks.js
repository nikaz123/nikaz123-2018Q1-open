 class TaskAnimalTasks {
    constructor() {

        this.renderTask = this.renderTask.bind(this);


        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskAnimalTasks.html));

        this.answerfield=document.getElementById("answerTaskAnimalTasks");
        this.task=document.querySelector(".task.taskAnimalTasks");



        this.words=TaskAnimalTasks.words;


        this.renderTask();
    }



    renderTask() {
        this.answerfield.value = '';

        this.answerWordTasksAnimalString =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////отгадка

        this.wordTasksAnimal = this.words[this.answerWordTasksAnimalString];  ////текст загадки

        this.task.innerText=this.wordTasksAnimal;


    }

}

export default  TaskAnimalTasks;