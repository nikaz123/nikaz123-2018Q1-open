


componentDidMount() {
    this.props.getScore();
}

export default connect(
    state => (state.scores),
    (dispatch) => ({
        getScore: () => dispatch(getScore()),
    }),
)(ScoreGridContainer);