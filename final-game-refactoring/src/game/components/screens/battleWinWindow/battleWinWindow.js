class BattleWinWindow {

    constructor () {

    this.elementDiv = document.getElementById("game-window");

    function createElementFromHTML(htmlString) {
        let div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

    this.elementDiv.appendChild(createElementFromHTML(BattleWinWindow.html));
}

run() {

}

}

export default BattleWinWindow;
