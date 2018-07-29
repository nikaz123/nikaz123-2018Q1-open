import React from 'react';
import {render} from "react-dom";
import { Provider } from 'react-redux';
import timerMiddleware from 'redux-timer-middleware';
import thunkMiddleware from 'redux-thunk'
import { logger  } from 'redux-logger'

import { BrowserRouter as Router, Route } from 'react-router-dom';



import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';

import './index.css';


import App from "./componentsPresentational/App";


let store = createStore(reducers,   applyMiddleware(timerMiddleware,thunkMiddleware,logger ));
export {store};

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/*ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);*/

