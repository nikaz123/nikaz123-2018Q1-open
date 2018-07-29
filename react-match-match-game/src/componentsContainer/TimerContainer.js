import { connect } from 'react-redux';
import  Timer from '../componentsPresentational/wrapper/main/gameWindow/timer/Timer';



const mapStateToProps = (state) => {
    console.log(state)
    return {
        time:state.mmgreducer.time

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        }
    }


const TimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)

export default TimerContainer;

