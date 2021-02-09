const category_list = [
	{name: "read", id: 1}, 
	{name: "listen", id: 2}, 
	{name: "random"}
	];

export function getData() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_DATA'});
    	fetch('https://two-min-media-api.herokuapp.com/stories')        
          .then(resp => resp.json())
          .then(json => dispatch({ type: 'DATA_LOADED', payload: json.data }))
    };
}

export function chooseRandom() {
  return {
    type: 'CHOOSE_RANDOM', payload: randomPick(),
  }
}

function randomPick() {
  return Math.floor(Math.random() * 6) + 1;
}

