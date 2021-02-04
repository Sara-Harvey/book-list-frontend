import React, { Component } from "react";
import { connect } from 'react-redux';

import Stories from '../components/Stories';
import { getData } from '../actions/index.js';


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
      <h3>Check out these stories</h3>
        <Stories stories={stories} />
      </div>

    );
  }
}

  const mapStateToProps = state => {      
      return { stories: state.stories };
  };

export default connect(mapStateToProps, {getData})(StoryContainer);
