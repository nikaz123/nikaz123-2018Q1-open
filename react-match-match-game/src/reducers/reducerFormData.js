


import {
    CHANGE_FIRST_NAME_FIELD,
    CHANGE_LAST_NAME_FIELD,
    CHANGE_EMAIL_FIELD,
    CHANGE_DIFFICULTY_FIELD,
    CHANGE_SHIRT_FIELD
} from "../actions/index";

const initialState = {
    name: '',
    lastName: '',
    email: '',
    difficulty: '10',
    shirt: '1'

};

const reducerFormData = (state = initialState, action) => {
    switch (action.type) {


        case CHANGE_FIRST_NAME_FIELD:
            return Object.assign({}, state, {
                    name: action.payload
                }
            );

        case CHANGE_LAST_NAME_FIELD:
            return Object.assign({}, state, {
                    lastName: action.payload
                }
            );

        case CHANGE_EMAIL_FIELD:
            return Object.assign({}, state, {
                    email: action.payload
                }
            );

        case CHANGE_DIFFICULTY_FIELD:
            return Object.assign({}, state, {
                    difficulty: action.payload                }
            );

        case CHANGE_SHIRT_FIELD:
            return Object.assign({}, state, {
                    shirt: action.payload
                }
            );




        default:
            return state;
    }
};



export default reducerFormData;



