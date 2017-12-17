import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers/index';
import firebase from 'firebase';
import Router from './Router'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBOzFo_YrPTr-Yp6BjJupPbUVkpYRW1Mfc',
            authDomain: 'manager-9f1a1.firebaseapp.com',
            databaseURL: 'https://manager-9f1a1.firebaseio.com',
            projectId: 'manager-9f1a1',
            storageBucket: 'manager-9f1a1.appspot.com',
            messagingSenderId: '755818030281'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
             <Router />
             </Provider>
        );
    }
}


export default App;