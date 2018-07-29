import React, {Component} from 'react';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {
        this.props.getScore();
    }

    render() {
        console.log(this.props.score)
        let table = <table>{this.props.score.slice(-10).map((element)=><tr><td>{element.username}</td><td>{element.email}</td><td>{element.score}</td></tr>)}</table>

        return <div>{table}</div>;
    }

}

export default Results;