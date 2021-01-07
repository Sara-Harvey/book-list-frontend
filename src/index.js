import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
//import store from './store.js'
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
