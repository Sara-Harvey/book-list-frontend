import React, { Component } from "react";
import { connect } from 'react-redux';

import Stories from '../components/Stories';
import { getData } from '../actions/index.js';

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export class StoryContainer extends Component {  

  componentDidMount() {
    this.props.getData();
  };

  render() {
    let categoryId = Number(this.props.match.params.id)
    let selectedCat = this.props.stories.filter(story => {
      return story.attributes.category.id === categoryId})
    let stories = selectedCat

    return (
      <div>
      
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Check out these stories</Card.Title>
          </Card.Body> 
        </Card>
      </CardDeck>

        <Stories stories={stories} />
      </div>

    );
  }
}

  const mapStateToProps = state => {      
      return { stories: state.stories };
  };

export default connect(mapStateToProps, {getData})(StoryContainer);
