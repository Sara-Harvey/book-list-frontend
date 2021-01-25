// Step 4. Creating the reducer
// reducer -- JS function with two parameters: current state and action
// When an action is dispatched, the store forwards a message 
// (the action object) to the reducer

const initialState = {
  stories: []
};

// initial state passed in as default parameter, this code returns initial state
function rootReducer(state = initialState, action) {
	// checks the action type -- when action is this, do this
	if (action.type === "DATA_LOADED") {
    
    // return a new JavaScript object to keep the original state unaltered
    return Object.assign({}, state, {
      // this preserves the original array
      stories: state.stories.concat(action.payload)
    });
  }
  // resulting state is just a copy of the initial state
  return state;
}

export default rootReducer;

// Step 5. Creating the action
// actions signal reducers to produce the app's state