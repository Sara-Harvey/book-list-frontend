import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Random extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.stories.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    stories: state.remoteStories.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Random);