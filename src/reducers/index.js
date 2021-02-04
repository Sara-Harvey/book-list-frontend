const initialState = {
  stories: [],
  categories: []
};

function rootReducer(state = initialState, action) {
    if (action.type === 'SHOW_CATEGORIES') {
    return Object.assign({}, state, {
      categories: state.categories.concat(action.payload)
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