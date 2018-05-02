export  const root = document.querySelector('.gamefield');

export default class Game {

    constructor(number, picture) {
        this.number = number;
        this.picture = picture;
        this.url = null;
        this.arr = null;
        this.value = null;
        this.current = null;
        this.count = 0;
        this.point = number;
        this.size = null;

    }


    choice() {

        switch (this.picture) {

            case 1:
                this.url = 'one-skirt';
                break;

            case 2:
                this.url = 'two-skirt';
                break;

            case 3:
                this.url = 'three-skirt';
                break;

        }

        this.arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

        switch (this.number) {

            case 10:
                this.size = 'big';
                break;

            case 18:
                this.size = 'medium';
                break;

            case 24:
                this.size = 'small';
                break;
        }
    }


    build() {
        let mynumber = this.number;
        while (mynumber > 0) {
            let value = Math.round(Math.random() * (mynumber - 1));

            root.innerHTML += `<div class="container ${this.size}">
            <div class="card" num=${this.arr[value]}>
              <div class="front ${this.url}"></div>
              <div class="back"><img src="images/fish${this.arr[value]}.png"</div>
            </div>
          </div>`;

            this.arr.splice(value, 1);
            mynumber = mynumber - 1;
        }
    }


    handle() {
        root.addEventListener('click', (event) => {
            let target = event.target;
            while (target !== root) {
                if (target.classList.contains('card')) {
                    if (this.count === 2) {
                        return false;
                    }
                    target.classList.add('flipped');
                    this.count = this.count + 1;

                    if (this.count === 1) {
                        this.current = target;
                    }

                    if (target === this.current) {
                        this.count = 1;
                    }

                    if (this.count === 2) {
                        if (this.current.getAttribute('num') === target.getAttribute('num')) {
                            setTimeout(() => {
                                this.current.classList.add('hideout');
                                target.classList.add('hideout');
                                this.point = this.point - 2;
                                this.count = 0;
                                if (this.point === 0) {
                                    this.win();
                                }

                            }, 500);

                        } else {
                            setTimeout(() => {
                                this.current.classList.remove('flipped');
                                target.classList.remove('flipped');
                                this.count = 0;
                            }, 1000);
                        }
                    }
                    return;
                }
                target = target.parentNode;
            }
        });
    }


    cleanUp() {
        root.innerHTML = '';
    }

    win() {
        root.classList.remove('wrapper');
        root.innerHTML = `<h2 class="win_title">You win!</h2>`;
        clearInterval(interval);
        let name = localStorage['name'];
        let timestr = minute + ":" + second;
        let seconds = minute * 60 + second;
        let record = [name, timestr, seconds, this.number];
        top10.push(record);

        let curr_number = this.number;

        let curr_diff = top10.filter(function (a) {
            return a[3] == curr_number
        });

        curr_diff.sort(sortByTime);


        curr_diff = curr_diff.slice(0, 10);

        let other_diff = top10.filter(function (a) {
            return a[3] !== curr_number
        });

        top10 = other_diff.concat(curr_diff);
        localStorage['top10'] = JSON.stringify(top10);

        drawTop10(curr_number);

        function sortByTime(a, b) {
            return a[2] > b[2] ? 1 : -1;
        }
    }


    init() {
        this.choice();
        this.build();
        this.handle();
    }

}