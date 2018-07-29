import React, {Component} from 'react';


class ButtonStopGame extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }


    render() {
        return  (
            <button
                onClick={this.props.onClick}
                type="submit"
                className="stop-game"
                id="stopGameBtn"
            >
                stop
            </button>
        )
    }
}

export default ButtonStopGame;