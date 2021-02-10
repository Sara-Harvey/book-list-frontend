import React, { Component } from "react";
import { connect } from 'react-redux';

import Stories from '../components/Stories.js';
import { getData } from '../actions/index.js';

class RandomContainer extends Component {

  componentDidMount() {
    this.props.getData();
  };

  render() {
   let randomStory = this.props.stories.sort(() => Math.random() - Math.random()).slice(0, 1);
   let stories = randomStory

    return (
          <div>
              <h3>A random story to read or hear</h3>
              <Stories stories={stories} />            
          </div>
        ); 
      }
  }

  const mapStateToProps = (state) => {
    return { stories: state.stories };
  };

  const mapDispatchToProps = dispatch => {
    return { getData: () => {dispatch(getData())} };
  };

export default connect(mapStateToProps, mapDispatchToProps)(RandomContainer);

