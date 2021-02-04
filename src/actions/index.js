const category_list = [
	{name: "read", id: 1}, 
	{name: "listen", id: 2}, 
	{name: "random"}
	];

export function showCategories(payload) {
	return {type: 'SHOW_CATEGORIES', payload: category_list}
};

export function getData() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_DATA'});
    	fetch('https://two-min-media-api.herokuapp.com/stories')        
          .then(resp => resp.json())
          .then(json => dispatch({ type: 'DATA_LOADED', payload: json.data }))
    };
}