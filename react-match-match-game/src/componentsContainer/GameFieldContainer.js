import { connect } from 'react-redux';
import GameField from '../componentsPresentational/wrapper/main/gameWindow/gameField/GameField';
import {winGame} from "../actions/index";
import {STOP_TIMER} from 'redux-timer-middleware';
import axios from 'axios';
import {postScoreSuccess, postScoreError,postScore, getScore} from '../actions/index';








const mapStateToProps = (state) => {
    return {
       difficulty:state.reducerFormData.difficulty,
        shirt:state.reducerFormData.shirt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        win: () => {
            dispatch(winGame());
            dispatch({
                type: STOP_TIMER,
                payload: {
                    timerName: 'infiniteTimer'
                }
            })
            dispatch(postScore())
            dispatch(getScore())
        }
    }
}

const GameFieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameField)

export default GameFieldContainer;