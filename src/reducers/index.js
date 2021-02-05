const initialState = {
  stories: [],
  numbers: []
};

function rootReducer(state = initialState, action) {
  if (action.type === "CHOOSE_RANDOM") {
  	return Object.assign({}, state, {
      numbers: state.numbers.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      stories: state.stories.concat(action.payload)
    });
  }
return state;  
}

export default rootReducer;