export function addStory (data) {
    return (dispatch) => {
        fetch('https://two-min-media-api.herokuapp.com/stories', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        })
        
        .then(response => response.json())
        .then(data => { console.log('Success:', data); })
            //dispatch({ type:'ADD_STORY', payload: data }))
        .catch((error) => { console.error('Error:', error); });
        
        };
    }