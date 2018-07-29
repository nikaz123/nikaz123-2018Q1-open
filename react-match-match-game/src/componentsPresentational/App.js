import React,  {Component} from 'react';
import {connect} from 'react-redux';


import Wrapper from "./wrapper/Wrapper";
import Footer from "./Footer";


function App() {

    return [
        <div className="wrapper"><Wrapper/></div>,
        <Footer />
       ]

}


export default App;