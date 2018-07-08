class TaskCapitals {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskCapitals.html));

        this.answerfield=document.getElementById("answerCapitals");
        this.task=document.querySelector(".task.Capitals");


        this.words=TaskCapitals.words;


        this.renderTask();
    }



    renderTask() {

        this.answerfield.value = '';

        this.answerCapitals =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];//city

        this.wordCapitalsArray = this.words[this.answerCapitals];//country

        this.task.innerText=this.wordCapitalsArray;
    }

}

export default TaskCapitals ;