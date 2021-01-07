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
        {this.props.items.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.remoteItems.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Random);