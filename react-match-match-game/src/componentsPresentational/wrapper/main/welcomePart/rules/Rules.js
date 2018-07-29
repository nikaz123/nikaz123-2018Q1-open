import React from 'react';

import ResultsContainer from "../../../../../componentsContainer/ResultsContainer";



function Rules () {
    return  [

        <h2> Welcome! </h2>,
        <h3>How to play</h3>,
        <p> The player turns over two cards, one at a time. The cards are kept in position. </p>,
        <p>    If the cards match - they disappear. Goal is to remove all cards as quickly as possible</p>,

        <div className="top10">
            <h3> LAST 10 </h3>

            <div className="results"> <ResultsContainer/> </div>

        </div>

    ]
}




export default Rules;