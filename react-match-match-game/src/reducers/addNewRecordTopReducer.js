import { ADD_NEW_RECORD} from "../actions/index";

const initialState = {
    records: [],

};



const reducerNewRecordTop = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_RECORD:

            return Object.assign({}, state, {
                    records: [...state.records, ...action.payload]
                }
            )


        default:
            return state
    }
}

    export default reducerNewRecordTop;