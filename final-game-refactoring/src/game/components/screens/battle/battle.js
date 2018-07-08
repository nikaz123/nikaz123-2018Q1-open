class Battle {
    constructor () {

        this.body = document.getElementsByTagName("BODY")[0];

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.body.appendChild(createElementFromHTML(Battle.html));
    }

    run() {




    }




}


export default Battle;