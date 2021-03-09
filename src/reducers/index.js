const initialState = {
  stories: [],
  story: [],
  loading: true
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
    const stories = state.stories.filter(story => story.id !== action.payload.id);
    return {
      stories
    };
  }      
  
  return state;
}

export default rootReducer;