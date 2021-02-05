import React, { Component } from "react";
import { connect } from 'react-redux';

import Stories from '../components/Stories';
import { getData } from '../actions/index.js';
//import { rollDice } from '../actions/index.js';

export class RandomContainer extends Component {  

  componentDidMount() {
    this.props.getData();
    //this.props.store.dispatch(rollDice());
  };

  // dispatch(rollDice())
  // this.props.store.dispatch(rollDice())

  render() {
    const {stories} = this.props;

    return (
      <div>
      <h3>A random story to read or hear</h3>
        <Stories stories={stories} />
      </div>

    );
  }
}

  const mapStateToProps = state => {      
      return { stories: state.stories };
  };

export default connect(mapStateToProps, {getData})(RandomContainer);

