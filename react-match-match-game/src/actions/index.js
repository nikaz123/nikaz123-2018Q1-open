import {store} from '../index'

import axios from 'axios';

export const SHOW_WELCOMEPART = 'SHOW_WELCOMEPART';
export const HIDE_WELCOMEPART = 'HIDE_WELCOMEPART';


export  const SHOW_GAMEWINDOW ='SHOW_GAMEWINDOW';
export  const HIDE_GAMEWINDOW='HIDE_GAMEWINDOW_GAMEWINDOW';


export const SWITCH_WELCOMEPART_GAMEWINDOW  ='SWITCH_WELCOMEPART_GAMEWINDOW';
export const SWITCH_GAMEWINDOW_WELCOMEPART  ='SWITCH_GAMEWINDOW_WELCOMEPART';

export const WIN_GAME = 'WIN_GAME';
export  const  ADD_NEW_RECORD = 'ADD_NEW_RECORD';


export const CHANGE_FIRST_NAME_FIELD='CHANGE_FIRST_NAME_FIELD';
export const CHANGE_LAST_NAME_FIELD='CHANGE_LAST_NAME_FIELD';
export const CHANGE_EMAIL_FIELD='CHANGE_EMAIL_FIELD';
export const CHANGE_DIFFICULTY_FIELD='CHANGE_DIFFICULTY_FIELD';
export const CHANGE_SHIRT_FIELD='CHANGE_SHIRT_FIELD';


export const UPDATE_TIMER = 'UPDATE_TIMER';
export const CLEAR_TIMER = 'CLEAR_TIMER';


export  const FETCH_SCORE_SUCCESS='FETCH_SCORE_SUCCESS';
export const  FETCH_SCORE_ERROR='FETCH_SCORE_ERROR';


export  const POST_SCORE_SUCCESS='POST_SCORE_SUCCESS';
export  const POST_SCORE_ERROR='POST_SCORE_ERROR';



export function hideWelcomePart() {
    return { type: HIDE_WELCOMEPART }
}

export function showWelcomePart() {
    return { type: SHOW_WELCOMEPART }
}




export function showGameWindow () {
    return { type: SHOW_GAMEWINDOW }
}

export function hideGameWindow () {
    return { type: SHOW_GAMEWINDOW }
}




export function switchWelcomepartGamewindow () {
    return { type: SWITCH_WELCOMEPART_GAMEWINDOW }
}

export function switchGamewindowWelcomepart () {
    return { type: SWITCH_GAMEWINDOW_WELCOMEPART}
}



export function winGame () {
    return { type: WIN_GAME}
}

export function addNewRecord (name, lastName, email, time) {
    return { type: ADD_NEW_RECORD, payload: {name, lastName, email, time}}
}




export const changeFirstNameField = name=>({
    type: CHANGE_FIRST_NAME_FIELD,
    payload:name
});

export const changeLastNameField = lastName=>({
    type: CHANGE_LAST_NAME_FIELD,
    payload:lastName
});

export const changeEmailField = email=>({
    type: CHANGE_EMAIL_FIELD,
    payload:email
});

export const changeDifficultyField = difficulty=>({
    type: CHANGE_DIFFICULTY_FIELD,
    payload:difficulty
});

export const changeShirtField = shirt=>({
    type: CHANGE_SHIRT_FIELD,
    payload:shirt
});


export const updateTimer = ()=> ({
    type: UPDATE_TIMER
});

export const clearTimer = ()=> ({
    type: CLEAR_TIMER
});







export const loadScoreSuccess = score => ({
    type: FETCH_SCORE_SUCCESS,
    payload: score
});

export const loadScoreError = response => ({
    type: FETCH_SCORE_ERROR,
    payload: response.data.error
});


export const postScoreSuccess = score => ({
    type: POST_SCORE_SUCCESS

});

export const postScoreError = response => ({
    type: POST_SCORE_ERROR

});

export const postScore = () => dispatch => {
    let state=store.getState()
    axios.post('http://mmg-score.herokuapp.com/', {username: state.reducerFormData.name,
        email:state.reducerFormData.email,
        score: state.mmgreducer.time
    })
        .then(response => {
                if (response.status === 200) {
                    console.log(response);

                    dispatch(postScoreSuccess())
                } else {
                    dispatch(postScoreError())
                }
            }
        );
};


export const getScore = () => dispatch => {
    axios.get('http://mmg-score.herokuapp.com/')
        .then(response => {
                if (response.status === 200) {
                    console.log(response);

                    dispatch(loadScoreSuccess(response.data.result))
                } else {
                    dispatch(loadScoreError(response.data.error))
                }
            }
        );
};