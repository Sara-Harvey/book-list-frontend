const initialState = {
  stories: []
};

function rootReducer(state = initialState, action) {
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      stories: state.stories.concat(action.payload)
    });
  }

  if (action.type === "ADD_STORY") {
    return Object.assign({}, state, {
      stories: state.stories.concat(action.payload)
    });
  }

  if (action.type === "DELETE_STORY") {
    return Object.delete({}, state, {
      stories: state.stories.concat(action.payload)
    });
  }
  
  return state;
}

export default rootReducer;