import React, { Component } from "react";
import { connect } from 'react-redux';
import { getData } from "../actions/index";

export class RandomContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.stories.map(stories => (
          <li key={stories.id}>
              <div class="name">{stories.attributes.name}</div> 
              <div class="author">by {stories.attributes.author}</div>
              <div class="description">{stories.attributes.description}</div>
              <div class="link"><a href={stories.attributes.link}>Link</a></div>
              <div class="category"><p>Category: {stories.attributes.category.name}</p></div>
            </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    stories: state.stories
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(RandomContainer);