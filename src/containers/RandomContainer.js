import React, { Component } from "react";
import { connect } from 'react-redux';

import Stories from '../components/Stories';
import { getData } from '../actions/index.js';


export class StoryContainer extends Component {  

  componentDidMount() {
    this.props.getData();
  };

  render() {
    const {stories} = this.props;
    let randomNumber = 0;

    randomNumber = (arry=[]) => {
        var num = Math.floor(Math.random() * arry.length);
        this.randomNumber = num;
    }



    return (
      <div>
      <h3>A random story to read or hear</h3>
        <Stories stories={stories[this.randomNumber]} />
      </div>

    );
  }
}

  const mapStateToProps = state => {      
      return { stories: state.stories };
  };

export default connect(mapStateToProps, {getData})(StoryContainer);
