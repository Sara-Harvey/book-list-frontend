
const initialState = {
  remoteStories: []
};

function rootReducer(state = initialState, action) {
	if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteStories: state.remoteStories.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;