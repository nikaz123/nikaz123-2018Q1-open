class Login {
    constructor() {

        this.body = document.getElementsByTagName("BODY")[0];

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.body.appendChild(createElementFromHTML(Login.html));
    }

    run() {

        document.getElementById("firstNameInput").focus();
    }

}


export default Login;