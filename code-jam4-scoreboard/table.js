class Table {
    constructor() {
        this.table = this.createTable();
    }

    createTable() {
        let table = document.createElement('table');
        table.append(this.createHeader(), this.createBody());
        return table;
    }

    insertTable() {
        divResults.innerHTML = '';
        divResults.appendChild(this.table);
        console.log("table added")
    }

    createHeader() {
        let tHead = document.createElement('thead');
        let headTr = document.createElement('tr');
        tHead.appendChild(headTr);

        for (let i = 0; i < 1 + results.puzzles.length + 2; i++) {
            let headTh = document.createElement('th');
            headTr.append(headTh);
        }

        headTr.children[0].innerHTML = 'Name github';

        for (let i = 0; i < results.puzzles.length; i++) {
            headTr.children[i + 1].innerHTML = results.puzzles[i].name;
        }

        headTr.children[results.puzzles.length + 1].innerHTML = 'Total';
        headTr.children[results.puzzles.length + 2].innerHTML = 'Diff';

        return tHead;
    }


    createBody() {
        let tBody = document.createElement('tbody');
        for (let i = 0; i < users.length; i++) {
            let bodyTr = document.createElement('tr');
            tBody.appendChild(bodyTr);
            for (let j = 0; j < 1 + results.puzzles.length + 2; j++) {
                let bodyTd = document.createElement('td');
                bodyTr.appendChild(bodyTd);
            }


            bodyTr.children[0].innerHTML = users[i].displayName;

            let total = 0;
            for (let k = 0; k < results.puzzles.length; k++) {
                if (results.rounds[k].solutions[users[i].uid]) {
                    bodyTr.children[1 + k].innerHTML = results.rounds[k].solutions[users[i].uid].time.$numberLong;


                    //hover
                    bodyTr.children[1 + k].setAttribute('title', results.rounds[k].solutions[users[i].uid].code);
                    total += parseInt(results.rounds[k].solutions[users[i].uid].time.$numberLong)
                }
                else {
                    bodyTr.children[1 + k].innerHTML = 150;
                    total += 150;
                }
            }
            bodyTr.children[results.puzzles.length + 1].innerHTML = total.toString();

            //checkbox
            let checkElement = document.createElement('input');
            checkElement.type = "checkbox";
            checkElement.value = users[i].uid;
            bodyTr.children[results.puzzles.length + 2].appendChild(checkElement);


        }
        return tBody;
    }
}