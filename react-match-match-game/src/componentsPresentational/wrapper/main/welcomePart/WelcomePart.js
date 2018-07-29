import React, { Component } from 'react';


import  Form from "./form/Form";

import  Rules from "./rules/Rules";

function WelcomePart (props={visible: true}) {
    return props.visible?[
        <Form visible={true} onFormClick={props.onClick}/>,
        <div className="rules"><Rules/></div>
    ]:null
}

export default WelcomePart;