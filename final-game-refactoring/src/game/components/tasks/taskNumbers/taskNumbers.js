class TaskNumbers {
    constructor() {

        this.renderTask = this.renderTask.bind(this);


        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskNumbers.html));

        this.answerfield = document.getElementById("answerNumber");
        this.task = document.getElementsByClassName("task")[0];
        this.renderTask();
    }

    renderTask() {
        this.answerfield.value = '';
        let value_one = Math.floor(Math.random() * 9) + 1;
        let value_two = Math.floor(Math.random() * 9) + 1;
        // Add Task to Display
        let new_task = `${value_one} * ${value_two}`;
        this.task.innerText = new_task;
    }

}

export default TaskNumbers;