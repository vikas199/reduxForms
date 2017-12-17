import {FRIENDS_CREATE, FRIENDS_UPDATE, FRIENDS_SAVE, DELETE_FRIENDS} from '../actions/Constants';

const initialState = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_UPDATE:
            return {
                ...state, [action.payload.prop]: action.payload.value
            };
        case DELETE_FRIENDS:
            return initialState;
        case FRIENDS_CREATE:
            return initialState;
        case FRIENDS_SAVE:
            return initialState;
        default:
            return state;
    }
}

