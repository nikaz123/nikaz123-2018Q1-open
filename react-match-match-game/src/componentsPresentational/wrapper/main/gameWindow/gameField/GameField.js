import fish1 from '../../../../../resources/img/fish1.png';
import fish2 from '../../../../../resources/img/fish2.png';
import fish3 from    '../../../../../resources/img/fish3.png';
import fish4 from   '../../../../../resources/img/fish4.png';
import fish5 from   '../../../../../resources/img/fish5.png';
import fish6 from   '../../../../../resources/img/fish6.png';
import fish7 from   '../../../../../resources/img/fish7.png';
import fish8 from   '../../../../../resources/img/fish8.png';
import fish9 from   '../../../../../resources/img/fish9.png';
import fish10 from   '../../../../../resources/img/fish10.png';
import fish11 from   '../../../../../resources/img/fish11.png';
import fish12 from   '../../../../../resources/img/fish12.png';

import React, {Component} from 'react';


function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div className='gamefield' onClick={props.callback}>{items}</div>;
}


class GameField extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {};
        this.choice();//??
        this.count=0;
        this.facePictures = [
            fish1,   fish2,   fish3,   fish4,
            fish5,   fish6,   fish7,   fish8,
            fish9,   fish10,   fish11,   fish12

        ]
        this.point = props.difficulty;
        this.onCardClick = this.onCardClick.bind(this);

    }


    choice() {
        switch (Number.parseInt(this.props.shirt)) {

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

        switch (Number.parseInt(this.props.difficulty)) {

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

    onCardClick(event) {
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
                                this.props.win();
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


    }



    render() {
        let mynumber = this.props.difficulty;

        return (
            <Repeat numTimes={mynumber} callback={this.onCardClick}>
                {(index) => {

                    let value = Math.round(Math.random() * (mynumber-index-1 ));
                    let card_element = (<div className={"container "+this.size}>
                        <div className="card" num={this.arr[value]}>
                            <div className={"front " + this.url}></div>
                            <div className="back"><img src={this.facePictures[this.arr[value]-1]}/></div>
                        </div>
                    </div>)
                    this.arr.splice(value, 1);

                    return card_element
                }

                }
            </Repeat>

        )


    }

}


export default GameField;