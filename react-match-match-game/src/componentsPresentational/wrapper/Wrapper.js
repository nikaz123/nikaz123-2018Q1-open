import React from 'react';
//import "./App.less";

import  Header from "./Header";
import  Main from "./main/Main";

function Wrapper () {
    return [
        <Header/>,
        <main><Main/></main>
       ]

}

export default Wrapper;