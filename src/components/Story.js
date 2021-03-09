import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux';
import { deleteStory } from '../actions/deleteStory.js'

function Story({ story, deleteStory }) {

	function handleSubmit(event) {
		event.preventDefault();
		deleteStory(story.id, story)
	}

	return (
		<CardDeck>
      	  <Card>

			<Card.Body>
	        <Card.Title>{story.attributes.name}</Card.Title>
	        <Card.Text>by {story.attributes.author}</Card.Text>
	        <p>{story.attributes.description}</p>

	        <p><a href={story.attributes.link}>Get the story here</a></p>
	        <p>Category: {story.attributes.category.name}</p>
	        <button onClick={handleSubmit}>delete</button>
	        </Card.Body> 
		  
		  </Card>
  		</CardDeck>
	  );
}

export default connect(null, {deleteStory}) (Story);