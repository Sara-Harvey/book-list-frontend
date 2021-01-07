import { ADD_ITEM } from "../constants/action-types";

export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}