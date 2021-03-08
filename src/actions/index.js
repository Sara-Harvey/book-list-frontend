export function getData() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_DATA'});
    	fetch('https://two-min-media-api.herokuapp.com/stories')
          .then(resp => resp.json())
          .then(json => dispatch({ type: 'DATA_LOADED', payload: json.data }))
    };
}
