import React, {Component} from 'react';

import img11 from "../../../../../resources/img/img11.jpg";
import img22 from "../../../../../resources/img/img22.jpg";
import img33 from "../../../../../resources/img/img33.jpg";
import {
    changeFirstNameField,
    changeLastNameField,
    changeEmailField,
    changeDifficultyField,
    changeShirtField
} from "../../../../../actions/index"


class Form extends Component {
    constructor(props={visible: true}) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: '',
            difficulty: '10',
            shirt: "1",

        };


        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDifficultChange = this.handleDifficultChange.bind(this);
        this.handleShirtChange = this.handleShirtChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleDifficultChange(changeEvent) {
        this.setState({
            difficulty: changeEvent.target.value
        });
    }

    handleShirtChange(changeEvent) {
        this.setState({
            shirt: changeEvent.target.value
        });
    }

    handleSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        this.props.onFormClick(this.state)
    }





    render() {

        return this.props.visible? (

            <form onSubmit={this.handleSubmit}>
                <div className="inputPlayerProfile">
                    <div className="players-name-lastname-email">
                        <h3>Player's profile </h3>

                        <div className="input-data">
                            <label> First Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Имя"
                                value={this.state.firstName}
                                onChange={this.handleFirstNameChange}
                            />
                        </div>

                        <div className="input-data">
                            <label> Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Фамилия"
                                value={this.state.lastName}
                                onChange={this.handleLastNameChange}
                            />
                        </div>

                        <div className="input-data">
                            <label> Email </label>

                            <input
                                id="email"
                                type="text"
                                placeholder="E-mail"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>

                        <div className="game-difficulty">
                            <h3> Game Difficulty </h3>

                            <p><input name="level" type="radio" className="radio" value="10"
                                      checked={this.state.difficulty === '10'}
                                      onChange={this.handleDifficultChange}/>Low 5 pairs</p>
                            <p><input name="level" type="radio" className="radio" value="18"
                                      checked={this.state.difficulty === '18'}
                                      onChange={this.handleDifficultChange}/>Medium 9 pairs</p>
                            <p><input name="level" type="radio" className="radio" value="24"
                                      checked={this.state.difficulty === '24'}
                                      onChange={this.handleDifficultChange}/>High 12 pairs</p>


                        </div>

                        <div className="shirt-cards">
                            <h3> Shirt Cards </h3>
                            <input name="shirt" type="radio" className="radioShirt" id="firstShirt"
                                   value="1" checked={this.state.shirt === '1'}
                                   onChange={this.handleShirtChange}/> <label htmlFor="firstShirt"> <img src={img11} alt="img11"/> </label>

                            <input name="shirt" type="radio" className="radioShirt" id="secondShirt" value="2"
                                   checked={this.state.shirt === '2'}
                                   onChange={this.handleShirtChange}/>
                            <label htmlFor="secondShirt"> <img src={img22} alt="img22"/> </label>

                            <input name="shirt" type="radio" className="radioShirt" id="thirdShirt" value="3"
                                   checked={this.state.shirt === '3'}
                                   onChange={this.handleShirtChange}/>
                            <label htmlFor="thirdShirt"> <img src={img33} alt="img33"/> </label>


                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="begin-new-game"
                    id="startGameBtn"
                    value="start">start
                </button>
            </form>

        ):<div></div>;
    }
}





export default Form;

