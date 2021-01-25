// 1. Create app, add redux, thunk, router, provider and store
// 2. For React/Redux/Thunk, initialize the store now -- src/js/store/index.js

import React from 'react';

// react-dom package provides DOM-specific methods that can be used at
// the top level of your app -- https://reactjs.org/docs/react-dom.html#overview
import ReactDOM from 'react-dom';

// "When used with React, a <Provider> exists to wrap the application, 
// and anything within the Provider can have access to Redux" -- https://www.taniarascia.com/redux-react-guide/#store
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App';
import './index.css';

// example of below structure -- https://www.taniarascia.com/redux-react-guide/#store
// anything within the Provider can have access to Redux

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById("root")
);