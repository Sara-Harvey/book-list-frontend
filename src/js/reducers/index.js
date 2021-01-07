import { ADD_ITEM } from "../constants/action-types";

const initialState = {
  items: [],
  remoteItems: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    return Object.assign({}, state, {
      items: state.items.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteItems: state.remoteItems.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;