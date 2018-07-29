import React, { Component } from 'react';
import TimerContainer from "../../../../componentsContainer/TimerContainer";
import GameFieldContainer from  '../../../../componentsContainer/GameFieldContainer';
import ButtonStopGame from './buttonStopGame/ButtonStopGame';





class GameWindowPart extends Component {
    constructor(props={visible: false}) {
        super(props);
        this.state = {};
    }



        render() {
            return this.props.visible? [
                <TimerContainer />,
                 <GameFieldContainer  difficulty={10} shirt={1} />,
                <ButtonStopGame onClick={this.props.onClick}/>
                ]:null

        }



    }

export default GameWindowPart;



















