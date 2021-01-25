const initialState = {
  stories: []
};

function rootReducer(state = initialState, action) {
	if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      stories: state.stories.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
