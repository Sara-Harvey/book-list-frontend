import { ADD_STORY } from "../constants/action-types";

export function addStory(payload) {
  return { type: ADD_STORY, payload };
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