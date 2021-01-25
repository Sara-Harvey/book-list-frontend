// Step 5. Creating the action
// actions are JS objects

// Thunk -- https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk
// NPM package, middleware

// APIs -- https://www.valentinog.com/blog/redux/#asynchronous-actions-in-redux-with-redux-thunk

export function getData() {

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_DATA'});
    	fetch('https://two-min-media-api.herokuapp.com/stories')
    	// fetch() returns a Promise -- "data will be available when we can access it"
    	// then() -- accesses data when promise resolves, parses it into JSON
        
          .then(resp => resp.json())
          // "when we receive the data ..."

          // Thunk -- fetch returns a function (vs. an object)
          // That function receives the store's dispatch function as its argument. 
          // With that, we can dispatch multiple actions from inside that returned function.
          .then(json => dispatch({ type: 'DATA_LOADED', payload: json.data }))
    };
}



// dispatch function -- https://dev.to/dustinmyers/what-even-is-a-dispatch-function-27ma 
// function dispatch(action) {  } OR
// dispatch({ type: 'ACTION_TYPE' })

// action must be an object with a type property
// type property, required, drives how the state should change
// payload property, not required, describes what should change
// declare actions as constants -- https://www.valentinog.com/blog/redux/#react-redux-tutorial-getting-to-know-redux-actions-and-named-constants
