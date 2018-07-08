  class TableResults {

    constructor(results) {

        this.elementDiv = document.getElementById("game-window");

        function createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }

        this.elementDiv.appendChild(createElementFromHTML(TableResults.html));


        this.results = results;
        this.table = this.createTable();

    }

    createTable() {
        let table = document.createElement('table');
        table.append(this.createHeader(), this.createBody());
        return table;
    }

    insertTable() {
        winnerResult.appendChild(this.table);
    }

    createHeader() {
        let tHead = document.createElement('thead');
        let headTr = document.createElement('tr');
        tHead.appendChild(headTr);
        for (let i = 0; i < 2; i++) {
            let headTh = document.createElement('th');
            headTr.append(headTh);
        }
        headTr.children[0].innerHTML = 'Имя героя';
        headTr.children[1].innerHTML = 'Сколько монстров ты победил';
        return tHead;
    }

    createBody() {
        let tBody = document.createElement('tbody');
        this.results = JSON.parse(localStorage['ATtop5']);
        for (let i = 0; i < 5; i++) {
            let bodyTr = document.createElement('tr');
            tBody.appendChild(bodyTr);
            for (let j = 0; j < 2; j++) {
                let bodyTd = document.createElement('td');
                bodyTr.appendChild(bodyTd);
            };


            if (this.results[i]) {
                bodyTr.children[0].innerHTML = this.results[i].atname ? this.results[i].atname : "";
                bodyTr.children[1].innerHTML = this.results[i].atscore;
            }

        }
        return tBody;
    }
}
  export default TableResults;