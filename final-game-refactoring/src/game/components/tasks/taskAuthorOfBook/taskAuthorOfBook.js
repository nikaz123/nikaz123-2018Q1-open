class TaskAuthorOfBook {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskAuthorOfBook.html));

        this.answerfield=document.getElementById("answerAuthorOfBook");
        this.task=document.querySelector(".task.AuthorOfBook");


        this.words=TaskAuthorOfBook.words;


        this.renderTask();
    }




    renderTask() {

        this.answerfield.value = '';

        this.answerAuthorOfBook=  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];

        this.wordAuthorOfBookArray = this.words[this.answerAuthorOfBook];

        this.task.innerText=this.wordAuthorOfBookArray;
    }

}

export default TaskAuthorOfBook;