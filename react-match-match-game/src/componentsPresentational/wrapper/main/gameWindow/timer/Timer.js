
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Timer extends Component {
    constructor(props) {
        super(props);

    }








    render() {
        return (
            <div className='timer'>
                Seconds: {this.props.time}
            </div>
        );
    }
}



export default Timer;

