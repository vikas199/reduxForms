import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from './Constants';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSuccess(user, dispatch))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginSuccess(user, dispatch))
                    .catch(() => loginFail(dispatch));
            });
    };
};

const loginSuccess = (user, dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
        email: '',
        password: ''
    });
    Actions.main();
};

const loginFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
};