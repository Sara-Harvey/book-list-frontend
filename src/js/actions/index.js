export function getData() {
  return function(dispatch) {
    
	return fetch("https://two-min-media-api.herokuapp.com/stories")

      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json.data });
      });
  };
}