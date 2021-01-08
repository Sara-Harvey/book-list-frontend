import { ADD_STORY } from "../constants/action-types";

const initialState = {
  items: [],
  remoteStories: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_STORY) {
    return Object.assign({}, state, {
      stories: state.stories.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteStories: state.remoteStories.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;