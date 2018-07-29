import {connect} from 'react-redux';
import WelcomePart from '../componentsPresentational/wrapper/main/welcomePart/WelcomePart';
import {
    UPDATE_TIMER,
    clearTimer,
    changeFirstNameField,
    changeLastNameField,
    changeEmailField,
    changeDifficultyField,
    changeShirtField,
    switchWelcomepartGamewindow
} from '../actions';
import {START_TIMER} from 'redux-timer-middleware';


const mapStateToProps = (state) => {
    return {
        visible: state.mmgreducer.welcomepart_visible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (form_state) => {
            dispatch(changeFirstNameField(form_state.firstName));
            dispatch(changeLastNameField(form_state.lastName));
            dispatch(changeEmailField(form_state.email));
            dispatch(changeDifficultyField(form_state.difficulty));
            dispatch(changeShirtField(form_state.shirt));
            dispatch(switchWelcomepartGamewindow());
            dispatch(clearTimer());
            dispatch({
                type: START_TIMER,
                payload: {
                    actionName: UPDATE_TIMER,
                    timerName: 'infiniteTimer'
                }
            });

        }
    }
}


const WelcomePartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomePart)

export default WelcomePartContainer
