import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import FriendsReducer from './FriendsReducer';
import friendsFetchReducer from './FriendsFetch';


export default combineReducers({
   auth: LoginReducer,
   friends: FriendsReducer,
    fetch: friendsFetchReducer
});