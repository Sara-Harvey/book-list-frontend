import React from 'react';

const Story = ({ story }) => {

	return (
		<div className="story">

	        <h4>{story.attributes.name}</h4> 
	        <p>by {story.attributes.author}</p>
	        <p>{story.attributes.description}</p>
	        <p><a href={story.attributes.link}>Link</a></p>
	        <p>{story.attributes.category.name}</p>		    
		</div>
	  )
}

export default Story;