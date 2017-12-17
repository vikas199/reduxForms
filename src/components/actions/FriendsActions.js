import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { FRIENDS_UPDATE, FETCH_SUCCESS, FRIENDS_SAVE, FRIENDS_CREATE, DELETE_FRIENDS } from './Constants';


export const friendsUpdate = ({ prop, value }) => {
    return {
        type: FRIENDS_UPDATE,
        payload: { prop, value }
    };
};

export const friendsCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/friends`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: FRIENDS_CREATE });
                Actions.friendsList({ type: 'reset' });
            });
    };
};

export const resetForm = () => {
    return {
        type: DELETE_FRIENDS
    }
}

export const friendsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/friends`)
            .on('value', snapshot => {
                dispatch({ type: FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const friendSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/friends/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: FRIENDS_SAVE });
                Actions.friendsList({ type: 'reset' });
            });
    };
}

export const friendDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({
            type: DELETE_FRIENDS,

        })
        firebase.database().ref(`/users/${currentUser.uid}/friends/${uid}`)
        .remove()
        .then(() => {
            Actions.friendsList({ type: 'reset' });
        });
    };
}