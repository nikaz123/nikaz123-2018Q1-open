import {combineReducers} from 'redux';
import {
    HIDE_WELCOMEPART, SHOW_WELCOMEPART, HIDE_GAMEWINDOW, SHOW_GAMEWINDOW, SWITCH_WELCOMEPART_GAMEWINDOW,
    SWITCH_GAMEWINDOW_WELCOMEPART, WIN_GAME, UPDATE_TIMER, CLEAR_TIMER,
} from "../actions/index";
import reducerNewRecordTop from './addNewRecordTopReducer';
import reducerFormData from './reducerFormData';
import APIreducer from './APIreducer';

const initialState = {
    welcomepart_visible: true,
    gamewindow_visible: false,
    cards: [],
    time: 0
}


const mmgreducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_WELCOMEPART:

            return Object.assign({}, state, {
                    welcomepart_visible: true
                }
            )

        case
        HIDE_WELCOMEPART:
            return Object.assign({}, state, {
                welcomepart_visible: false

            })

        case SHOW_GAMEWINDOW:

            return Object.assign({}, state, {
                    gamewindow_visible: true
                }
            )

        case
        HIDE_GAMEWINDOW:
            return Object.assign({}, state, {
                gamewindow_visible: false

            })

        case
        SWITCH_WELCOMEPART_GAMEWINDOW:
            return Object.assign({}, state, {
                gamewindow_visible: true,
                welcomepart_visible: false

            })

        case
        SWITCH_GAMEWINDOW_WELCOMEPART:
            return Object.assign({}, state, {
                gamewindow_visible: false,
                welcomepart_visible: true

            })
        case WIN_GAME:
            return Object.assign({}, state, {
                gamewindow_visible: false,
                welcomepart_visible: true
                }
            )
        case UPDATE_TIMER:
            return Object.assign({}, state, {
                    time: state.time+1
                }
            )

        case CLEAR_TIMER:
            return Object.assign({}, state, {
                    time: 0

                }
            )





        default:
            return state
    }
}






const reducers = combineReducers({
    mmgreducer,
    reducerNewRecordTop,
    reducerFormData,
    APIreducer
})


export default reducers;