class TaskRandomMathOperation {
    constructor() {
        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskRandomMathOperation.html));

        this.answerfield = document.getElementById("answerMathRandomOperation");
        this.task = document.querySelector(".task.MathRandomOperation");

        this.renderTask();
    }

    renderTask() {
        this.answerfield.value = '';
        let a = Math.floor(Math.random() * 8) + 1;
        let b = Math.floor(Math.random() * 8) + 1;
        let operators = [{
            sign: "+",
            method: function (a, b) {
                return a + b;
            }
        }, {
            sign: "-",
            method: function (a, b) {
                return a - b;
            }
        },
            {
                sign: "*",
                method: function (a, b) {
                    return a * b;
                }
            },
            {
                sign: "/",
                method: function (a, b) {
                    return a / b;
                }
            }
        ];

        let selectedOperator = Math.floor(Math.random() * operators.length);

        let new_task = a + " " + operators[selectedOperator].sign + " " + b + " =";

        this.answer = operators[selectedOperator].method(a, b);

        if (selectedOperator == 3) {
            let result = a * b;
            new_task = result + " / " + a + " =";
            this.answer = b;
        }
        this.task.innerText = new_task;
    }


}


export default TaskRandomMathOperation;