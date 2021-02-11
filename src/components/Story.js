import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Story = ({ story }) => {

	return (
		<CardDeck>
      	  <Card>

			<Card.Body>
	        <Card.Title>{story.attributes.name}</Card.Title>
	        <Card.Text>by {story.attributes.author}</Card.Text>
	        <p>{story.attributes.description}</p>

	        <p><a href={story.attributes.link}>Get the story here</a></p>
	        <p>Category: {story.attributes.category.name}</p>
	        </Card.Body> 
		  
		  </Card>
  		</CardDeck>
	  );
}

export default Story;