import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import Friends from './components/Friends';
import FriendsEdit from './components/FriendsEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main" >
                <Scene
                    rightTitle="Add"
                    key="friendsList"
                    component={Main}
                    title="Auth"
                />
           <Scene key="Add" component={Friends} title="Create Friends" />
           <Scene key="Edit"
                  component={FriendsEdit} title="edit friend" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;