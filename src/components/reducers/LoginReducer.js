import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from '../actions/Constants';

const initialState = { email: '', password: '', user: null, error: '', loading: false };


export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
        return {
            ...state,
            email: action.payload
        };
        case PASSWORD_CHANGED:
        return {
            ...state,
            password: action.payload
        };
        case LOGIN_SUCCESS:
        return {
            ...state, 
            ...initialState,
            user: action.payload
        };
        case LOGIN_FAIL:
        return {
            ...state,
            error: 'login failed',
            //password: '',
            loading: false
            
        };
        case LOGIN_USER: 
        return {
            ...state,
            loading: true,
            error: ''
        };
        default:
        return state;
    }
}