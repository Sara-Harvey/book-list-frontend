import React from 'react';

const Story = ({ story }) => {

	return (
		<div className="story">

	        <h4 className="name">{story.attributes.name}</h4> 
	        <p className="author>">by {story.attributes.author}</p>
	        <p className="description">{story.attributes.description}</p>
	        <p className="link"><a href={story.attributes.link}>Link</a></p>
	        <p className="category">Category: {story.attributes.category.name}</p>
		    
		</div>
	  )
}

export default Story;