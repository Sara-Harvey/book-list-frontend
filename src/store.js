// Step 3. (Step 2 is in index.js) 
// initialize the store -- a JS object, it holds a Redux app's state
// props -- data passed from parent, state -- mutated data (via updated props, user clicks)

// compose -- lets you enhance a store with applyMiddleware and dev tools
// https://redux.js.org/api/compose#example

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";

// Thunk handles asynchronous calls (fetch) when working with Redux
// a. dispatches an action saying we are loading data, 
// b. makes a request to the API,
// c. waits for the response and then dispatches another action 
// with the response data
import thunk from "redux-thunk";

// what this is -- https://extension.remotedev.io/#usage
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// initialize the store with a reducer function (root reducer)
// Step 4. Creating the reducer -- src/reducers/index.js

// Redux has one main reducer: "root reducer," passed to createStore.
// It handles all dispatched actions/calculates entire new state every time.
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#creating-the-root-reducer
// https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk

const store = createStore(
  rootReducer,

// storeEnhancers is used with Redux devtools -- https://extension.remotedev.io/#usage
  storeEnhancers(applyMiddleware(thunk))
);

export default store;