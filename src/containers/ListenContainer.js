import React, { Component } from "react";
import { connect } from 'react-redux';
import { getData } from '../actions/index.js';
import Stories from '../components/Stories';

export class ListenContainer extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {

    const {stories} = this.props;

    return (
      <div>
        <Stories stories={stories} />
      </div>

    );
  }
}

  const mapStateToProps = state => {      
      return { stories: state.stories };
  };

export default connect(mapStateToProps, {getData})(ListenContainer);
