class Home {
    constructor() {

        this.body = document.getElementsByTagName("BODY")[0];

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.body.appendChild(createElementFromHTML(Home.html));
    }

    run() {
        document.getElementById("btnNext").focus();
    }

}

export default Home;

