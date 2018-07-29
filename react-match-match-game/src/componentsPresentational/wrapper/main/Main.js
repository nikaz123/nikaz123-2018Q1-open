import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import "./App.less";

import  WelcomePartContainer from "../../../componentsContainer/welcomePartContainer";
import GameWindowPartContainer  from "../../../componentsContainer/gameWindowPartContainer";

//import  GameWindow from "./GameWindow";

function Main () {
    return [

       <section className='welcomePart'> <WelcomePartContainer/> </section>,
       <section className='gameWindow'> <GameWindowPartContainer /> </section>
    ]
}

export default Main;