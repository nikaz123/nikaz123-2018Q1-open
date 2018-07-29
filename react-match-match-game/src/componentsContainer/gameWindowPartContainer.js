import { connect } from 'react-redux';
import GameWindowPart from '../componentsPresentational/wrapper/main/gameWindow/GameWindowPart';
import { switchGamewindowWelcomepart } from '../actions';


const mapStateToProps = (state) => {
    return {
        visible: state.mmgreducer.gamewindow_visible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(switchGamewindowWelcomepart());

        }
    }
}

const GameWindowPartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameWindowPart)

export default GameWindowPartContainer;
