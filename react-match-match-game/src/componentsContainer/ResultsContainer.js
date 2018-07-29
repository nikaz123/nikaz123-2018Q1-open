import { connect } from 'react-redux';
import  Results from '../componentsPresentational/wrapper/main/welcomePart/rules/results/Results';
import {loadScoreSuccess,loadScoreError, getScore} from '../actions/index'





const mapStateToProps = (state) => {
    console.log(state)
    return {
        score: state.APIreducer.data

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getScore: () => dispatch(getScore())
    }
}


const ResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)

export default ResultsContainer;