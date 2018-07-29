import {  FETCH_SCORE_SUCCESS, FETCH_SCORE_ERROR } from "../actions/index";

const  APIreducer=(state = {data: [],
    isFetched: false}, action)=> {

    switch (action.type){

        case FETCH_SCORE_SUCCESS:
            //console.log(action.payload);
            return {...state,data: action.payload,
                isFetched: true};

        case FETCH_SCORE_ERROR:
            //console.log(action.payload.code);
            return {...state,data:'error',
                isFetched: true};
        default:
            return state;
    }
};

export default APIreducer;