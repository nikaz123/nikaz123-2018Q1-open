

require ('jquery');

class LoadingScreen {
    constructor() {

        this.body = document.getElementsByTagName("BODY")[0];

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.body.appendChild(createElementFromHTML(LoadingScreen.html));


    }

    run() {

        $(document).ready(function(){
           $('.loadingElement').remove();
        });

    }

}

export default LoadingScreen;
