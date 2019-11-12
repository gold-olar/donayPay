import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './container/App';
import './style.css';
import * as serviceWorker from './serviceWorker';



axios.defaults.baseURL = 'http://donaypayapi.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
