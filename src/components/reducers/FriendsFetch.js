import { FETCH_SUCCESS } from '../actions/Constants';


const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}