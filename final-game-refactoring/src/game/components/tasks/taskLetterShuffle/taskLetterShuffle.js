
require('jquery');
require('jquery-ui');
class TaskLetterShuffle {
    constructor() {

        this.renderTask = this.renderTask.bind(this);

        this.divElement = document.getElementById('game-window');

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.divElement.appendChild(createElementFromHTML(TaskLetterShuffle.html));

        $(function () {
            $("#sortable").sortable();
            $("#sortable").disableSelection();
        });


        this.task = document.querySelector(".WordLettersShuffle");



        this.words = TaskLetterShuffle.words;


        String.prototype.shuffle = function () {
            let a = this.split(""),
                n = a.length;

            for (let i = n - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            return a.join("");
        }
        this.renderTask();

    }


    renderTask() {

        sortable.innerHTML = '';
        this.wordShuffle = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  // random word from array
        this.shuffledWord = this.wordShuffle.shuffle();

        Array.from(this.shuffledWord).forEach(
            (currentValue, index, array) => {
                let eli = document.createElement("LI");
                eli.innerText = currentValue;
                sortable.appendChild(eli);

            }
        )


    }

}

export default TaskLetterShuffle;