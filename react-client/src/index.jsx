import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { firebaseApp } from './config/firebase.js' 
import {createBrowserHistory} from 'history';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App.jsx'
import { logUser } from './actions/index.js';
import reducer from './reducers';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('user is logged in or has signed up')
    const { email } = user;
    store.dispatch(logUser(email))
  } else {
    // No user is signed in.
    console.log('user is not logged in')
  }
});

ReactDOM.render(  
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
, document.getElementById('app')
);

